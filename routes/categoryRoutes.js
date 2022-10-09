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

router.get("/categories/:page", Authorization.authorized, Category.Categories);

router.get(
  "/fetch-category/:id",
  Authorization.authorized,
  Category.fetchCategories
);

router.put(
  "/update-category/:id",
  [categoryValidtion, Authorization.authorized],
  Category.updateCategory
);

module.exports = router;
