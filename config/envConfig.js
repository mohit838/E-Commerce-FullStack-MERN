// For environment
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  JWT_CODE: process.env.JWT_SEC,
};
