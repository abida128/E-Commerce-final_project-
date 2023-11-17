const { ShoppingCart } = require("../../models");

module.exports = async (req, res) => {
  const { _id, itemId } = req.params;

  console.log(req.params);

  try {
    // Find the user's shopping cart
    const shoppingCart = await ShoppingCart.findById(_id);

    if (!shoppingCart) {
      return res.status(404).json({ message: "Shopping cart not found" });
    }

    // Find the index of the item in the items array
    const itemIndex = shoppingCart.items.findIndex(
      (item) => item._id.toString() === itemId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in the cart" });
    }

    // Remove the item from the items array
    shoppingCart.items.splice(itemIndex, 1);

    // Save the updated shopping cart
    await shoppingCart.save();

    res.json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
