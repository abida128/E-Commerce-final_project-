const { Product } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const productId = req.params.id; // Assuming you're passing the product ID in the request parameters
    console.log(productId);
    if (!productId) {
      return res.status(400).json({ message: "Product ID is missing" });
    }

    // Check if the product with the given ID exists
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await Product.deleteOne({ _id: productId });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
