const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

module.exports.CategoryModel = mongoose.model("Category", categorySchema);
