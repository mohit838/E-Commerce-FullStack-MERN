const express = require("express");
const Category = require("../controllers/categories.js");
const { categoryValidtion } = require("../validations/categoryValidation");
const router = express.Router();

router.post("/create-category", categoryValidtion, Category.createCategory);

module.exports = router;
