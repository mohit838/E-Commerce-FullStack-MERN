const express = require("express");
const {
  registerValidations,
  loginValidations,
} = require("../validations/userValidation");
const { register, login } = require("../controllers/usersController");

const router = express.Router();

router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);

module.exports = router;
