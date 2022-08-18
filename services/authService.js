const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_CODE } = require("./../config/envConfig");

// @For Hashing password
module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const genHashPassword = await bcrypt.hash(password, salt);
  return genHashPassword;
};

// @For Matching password
module.exports.matchingPassword = async (password, dbPassword) => {
  return await bcrypt.compare(password, dbPassword);
};

// @For JWT token generation
module.exports.jwtTokenCreate = (user) => {
  return jwt.sign(user, JWT_CODE, {
    expiresIn: "3d",
  });
};
