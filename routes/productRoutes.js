const express = require("express");
const Authorization = require("../services/Authorization");
const router = new express.Router();
const Product = require("./../controllers/product");

router.post("/create-product", [Authorization.authorized], Product.create);

module.exports = router;
