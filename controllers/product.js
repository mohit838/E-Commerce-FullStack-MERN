const formidable = require("formidable");
// const { v4: uuidv4 } = require("uuid");
// const fs = require("fs");
// const path = require("path");
// const ProductModel = require("./../models/ProductModel");

class Product {
  async create(req, res) {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
      if (!err) {
        const parsedData = JSON.parse(fields.data);
        const errors = [];

        // Data with custom validations

        if (parsedData.title.trim().length === 0) {
          errors.push({ msg: "Title is required!" });
        }
        if (parseInt(parsedData.price) < 1) {
          errors.push({ msg: "Price should be less than $1!" });
        }
        if (parseInt(parsedData.discount) < 0) {
          errors.push({ msg: "Discount should not be negative!" });
        }
        if (parseInt(parsedData.stock) < 10) {
          errors.push({ msg: "Stock should be less than 10!" });
        }
        if (parsedData.category.trim().length === 0) {
          errors.push({ msg: "Category is required!" });
        }
        if (fields.description.trim().length === 0) {
          errors.push({ msg: "Description is required!" });
        }

        if (errors.length === 0) {
        } else {
          return res.status(400).json({ errors });
        }
      }
    });
  }
}

module.exports = new Product();
