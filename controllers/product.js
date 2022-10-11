const formidable = require("formidable");
// const { v4: uuidv4 } = require("uuid");
// const fs = require("fs");
// const path = require("path");
// const ProductModel = require("./../models/ProductModel");

class Product {
  async create(req, res) {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {});
  }
}

module.exports = new Product();
