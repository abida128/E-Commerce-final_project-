const express = require("express");
const router = express.Router();
const { Product, ShoppingCart, User } = require("../../models"); // Update the path as needed
const ShoppingCartSchema = require("../../models/shoppingCartModel");

// Add to Cart route
module.exports = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.query;
    console.log(req);
    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if the user has a shopping cart
    let shoppingCart = await ShoppingCartSchema.findOne({ user: userId });

    // If the user doesn't have a shopping cart, create one
    if (!shoppingCart) {
      shoppingCart = new ShoppingCart({
        user: userId,
        items: [], // Initialize the items array
      });
    }

    // Check if the product is already in the cart
    const cartItemIndex =
      shoppingCart.items &&
      shoppingCart.items.findIndex(
        (item) => item.product.toString() === productId
      );

    // If the product is already in the cart, update the quantity
    if (cartItemIndex !== undefined && cartItemIndex !== -1) {
      shoppingCart.items[cartItemIndex].quantity += quantity || 1;
    } else {
      // If the product is not in the cart, add a new cart item
      shoppingCart.items.push({
        product: productId,
        quantity: quantity || 1,
      });
    }

    // Save the updated shopping cart
    await shoppingCart.save();

    res.json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
