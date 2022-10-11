const express = require("express");
const Authorization = require("../services/Authorization");
const productValidations = require("../validations/productValidations");
const router = new express.Router();
const Product = require("./../controllers/product");

router.post(
  "/create-product",
  [Authorization.authorized, productValidations],
  Product.create
);

module.exports = router;
