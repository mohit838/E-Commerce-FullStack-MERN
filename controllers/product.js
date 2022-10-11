const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
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
          if (!files["image1"]) {
            errors.push({ msg: "Image1 is required" });
          }
          if (!files["image2"]) {
            errors.push({ msg: "Image2 is required" });
          }
          if (!files["image3"]) {
            errors.push({ msg: "Image3 is required" });
          }

          // Again check errors
          if (errors.length === 0) {
            const images = {};

            for (let i = 0; i < Object.keys(files).length; i++) {
              const mimeType = files[`image${i + 1}`].mimetype;
              const extension = mimeType.split("/")[1].toLowerCase();
              if (
                extension === "jpeg" ||
                extension === "jpg" ||
                extension === "png"
              ) {
                const imageName = uuidv4() + `.${extension}`;
                const __dirname = path.resolve();
                const newPath =
                  __dirname + `/client/public/images/${imageName}`;

                images[`image${i + 1}`] = imageName;

                fs.copyFile(files[`image${i + 1}`].filepath, newPath, (err) => {
                  if (err) {
                    console.log(err);
                  }
                });
              } else {
                const error = {};
                error["msg"] = `Image${i + 1} has invalid ${extension} type`;
                errors.push(error);
              }
            }

            // After Img Upload send data DB
            if (errors.length === 0) {
              try {
                const response = await ProductModel.create({
                  title: parsedData.title,
                  price: parseInt(parsedData.price),
                  discount: parseInt(parsedData.discount),
                  stock: parseInt(parsedData.stock),
                  category: parsedData.category,
                  colors: parsedData.colors,
                  sizes: JSON.parse(fields.sizes),
                  image1: images["image1"],
                  image2: images["image2"],
                  image3: images["image3"],
                  description: fields.description,
                });
                return res
                  .status(201)
                  .json({ msg: "Product has created.", response });
              } catch (error) {
                console.log(error);
                return res.status(500).json(error);
              }
            } else {
              return res.status(400).json({ errors });
            }
            // Img Upload Finished and send data DB
          } else {
            return res.status(400).json({ errors });
          }
        } else {
          return res.status(400).json({ errors });
        }
      }
    });
  }
}

module.exports = new Product();
