const { model, Schema } = require("mongoose");

const Product = model(
  "Product",
  new Schema({
    name: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    detail: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },

    Categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories", // Reference to the 'Category' model
      required: true,
    },
  })
);

module.exports = Product;
