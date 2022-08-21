const { body } = require("express-validator");

// @For Categories only
module.exports.categoryValidtion = [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Category Name Is Required!!"),
];
