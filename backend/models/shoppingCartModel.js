const { model, Schema, Types } = require("mongoose");

const CartItemSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: "product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const ShoppingCartSchema = model(
  "shoppingCart",
  new Schema({
    user: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
    items: [CartItemSchema],
  })
);

module.exports = ShoppingCartSchema;
