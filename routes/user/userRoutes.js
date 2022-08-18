const express = require("express");
const { registerValidations } = require("./../../validations/userValidation");
const {
  register,
  login,
} = require("./../../controllers/users/usersController");
const { loginValidations } = require("./../../validations/userValidation");

const router = express.Router();

router.post("/register", registerValidations, register);
router.post("/login", loginValidations, login);

module.exports = router;
