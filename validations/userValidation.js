const { body } = require("express-validator");

// @For Registration only
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
    .withMessage("Password Should be 8 Character long!"),
];

// @For Login only
module.exports.loginValidations = [
  body("email")
    .isEmail()
    .trim()
    .escape()
    .normalizeEmail()
    .withMessage("Email Is Required!!"),

  body("password").not().isEmpty().withMessage("Password Is Required!!"),
];
