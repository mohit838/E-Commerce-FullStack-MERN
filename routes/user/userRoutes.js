const express = require("express");
const { registerValidations } = require("./../../validations/userValidation");
const { register } = require("./../../controllers/users/usersController");

const router = express.Router();

router.post("/register", registerValidations, register);

module.exports = router;
