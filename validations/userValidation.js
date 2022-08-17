const { body } = require("express-validator");

module.exports.registerValidations = [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Name Is Required!!"),

  body("email")
    .isEmail()
    .trim()
    .escape()
    .normalizeEmail()
    .withMessage("Email Is Required!!"),

  body("password")
    .isLength({ min: 8 })
    .trim()
    .withMessage("Password Should be 8 Character long!"),
];
