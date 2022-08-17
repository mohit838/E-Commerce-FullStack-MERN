const bcrypt = require("bcrypt");

module.exports.hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const genHashPassword = await bcrypt.hash(password, salt);
  return genHashPassword;
};
