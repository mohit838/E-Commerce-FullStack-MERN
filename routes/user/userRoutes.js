const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

const registerValidations = [
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

router.post("/register", registerValidations, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});

module.exports = router;
