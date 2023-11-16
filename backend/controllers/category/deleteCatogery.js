const { Product } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Check if the productId is provided
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required." });
    }

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(productId);

    // Check if the product was found and deleted
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.json({ message: "Product deleted successfully." });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};
