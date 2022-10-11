const { body } = require("express-validator");

// @For Products only
module.exports.productValidtion = [
  body("title")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Product Name Is Required!!"),
];
