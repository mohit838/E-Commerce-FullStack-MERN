const formidable = require("formidable");
// const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
// const fs = require("fs");
// const path = require("path");
// const ProductModel = require("./../models/ProductModel");

class Product {
  async create(req, res) {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      if (!err) {
        const parsedData = JSON.parse(fields.data);

        req.body.title = parsedData.title;
        req.body.price = parsedData.price;
        req.body.discount = parsedData.discount;
        req.body.stock = parsedData.stock;
        req.body.category = parsedData.category;
        req.body.description = fields.description;

        const errors = validationResult(req);

        if (!errors) {
          console.log("No Error!");
        } else {
          console.log(errors.array());
          return res.status(400).json({ errors: errors.array() });
        }
      }
    });
  }
}

module.exports = new Product();
