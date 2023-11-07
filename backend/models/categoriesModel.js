const { model, Schema } = require("mongoose");

const Categories = model(
  "Categories",
  new Schema({
    name: {
      type: "string",
      required: "true",
    },
  })
);

module.exports = Categories;
