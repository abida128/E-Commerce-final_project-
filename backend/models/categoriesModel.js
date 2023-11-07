const mongoose = require("mongoose");

const Categories = mongoose.model(
  "categories",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);

module.exports = Categories;
