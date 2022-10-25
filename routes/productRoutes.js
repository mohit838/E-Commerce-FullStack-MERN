const express = require("express");
const Authorization = require("../services/Authorization");
const productValidations = require("../validations/productValidations");
const router = new express.Router();
const Product = require("../controllers/Product");

// Create new products
router.post("/create-product", [Authorization.authorized], Product.create);

// Paginations
router.get("/products/:page", Authorization.authorized, Product.get);

router.get("/product/:id", Product.getProduct);

// Update
router.put(
  "/product",
  [Authorization.authorized, productValidations],
  Product.updateProduct
);

// Delete
router.delete("/delete/:id", Authorization.authorized, Product.deleteProduct);

module.exports = router;
