const express = require("express");
const Authorization = require("../services/Authorization");
const productValidations = require("../validations/productValidations");
const router = new express.Router();
const Product = require("../controllers/Product");
const HomeProducts = require("../controllers/HomeProducts");

// Create new products
router.post("/create-product", [Authorization.authorized], Product.create);

// Paginations
router.get("/products/:page", Product.allGet);

// Get Single Product
router.get("/product/:id", Product.getSingleProduct);

// Update
router.put(
  "/product",
  [Authorization.authorized, productValidations],
  Product.updateProduct
);

// Delete
router.delete("/delete/:id", Authorization.authorized, Product.deleteProduct);

// CatProducts or HomeProducs page
router.get("/cat-products/:name/:page?", HomeProducts.catProducts);

// Search Products Pages For HomeProducts page
router.get("/search-products/:keyword/:page?", HomeProducts.catProducts);

module.exports = router;
