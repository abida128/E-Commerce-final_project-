const express = require("express");

const { User, ShoppingCart } = require("../../models"); // Update the path as needed

// Get user's shopping cart
module.exports = async (req, res) => {
  try {
    const { userId } = req.query;

    // Check if the user exists
    const userExists = await User.exists({ _id: userId });
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the shopping cart for the specified user
    const shoppingCart = await ShoppingCart.findOne({ user: userId }).populate(
      "items.product"
    );

    if (!shoppingCart) {
      return res
        .status(404)
        .json({ message: "Shopping cart not found for the user" });
    }

    res.json(shoppingCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
