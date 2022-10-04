const express = require("express");
const Category = require("../controllers/categories.js");
const { categoryValidtion } = require("../validations/categoryValidation");
const Authorization = require("./../services/Authorization");
const router = express.Router();

router.post(
  "/create-category",
  [categoryValidtion, Authorization.authorized],
  Category.createCategory
);

router.get(
  "/categories/:page",
  Authorization.authorized,
  Category.fetchCategories
);

module.exports = router;
