const { validationResult } = require("express-validator");
const { UserModel } = require("./../../models/User");
const { hashedPassword } = require("./../../services/authService");

// POST api/auth/register
// Public router
// Create user and return a token
module.exports.register = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name, email, password } = req.body;

    const isEmail = await UserModel.findOne({ email });

    if (!isEmail) {
      const encPassword = await hashedPassword(password);

      const newUser = await UserModel.create({
        name,
        email,
        password: encPassword,
      });

      return res.status(201).json({ msg: "You account has been created." });
    } else {
      return res
        .status(401)
        .json({ error: [{ msg: `${email} is already taken!` }] });
    }

    try {
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Server Inernal error!");
    }
  } else {
    // If failed the validation
    return res.status(400).json({ errors: errors.array() });
  }
};
