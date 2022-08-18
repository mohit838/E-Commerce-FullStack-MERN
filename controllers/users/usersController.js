const { validationResult } = require("express-validator");
const { UserModel } = require("./../../models/User");
const {
  hashedPassword,
  matchingPassword,
  jwtTokenCreate,
} = require("./../../services/authService");

// @POST api/auth/register
// @Public router
// @Create user and return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name, email, password } = req.body;

    const isEmail = await UserModel.findOne({ email });

    try {
      if (!isEmail) {
        const encPassword = await hashedPassword(password);

        // @Exactly same as UserModel is Important
        const newUser = await UserModel.create({
          name,
          email,
          password: encPassword,
        });

        // @JWT token
        const token = jwtTokenCreate({ id: newUser._id, name: newUser.name });

        return res
          .status(201)
          .json({ msg: "You account has been created.", token });
      } else {
        return res
          .status(401)
          .json({ error: [{ msg: `${email} is already taken!` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server Inernal error!");
    }
  } else {
    // @If failed the validation
    return res.status(400).json({ errors: errors.array() });
  }
};

// @POST api/auth/login
// @Public router
// @Login user and return a token
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const user = await UserModel.findOne({ email });

    try {
      if (user) {
        if (await matchingPassword(password, user.password)) {
          // @JWT token
          const token = jwtTokenCreate({ id: user._id, name: user.name });

          if (user.isAdmin) {
            return res.status(201).json({ token, isAdmin: true });
          } else {
            return res.status(201).json({ token, isAdmin: false });
          }
        } else {
          return res
            .status(401)
            .json({ error: [{ msg: "Password not matched!" }] });
        }
      } else {
        return res
          .status(401)
          .json({ error: [{ msg: `${email} is not found!` }] });
      }
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server Inernal error!");
    }
  } else {
    // @If failed the validation
    return res.status(400).json({ errors: errors.array() });
  }
};
