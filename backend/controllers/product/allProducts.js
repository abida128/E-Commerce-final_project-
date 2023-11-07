const { Product } = require("../../models");

module.exports = async (req, res) => {
  try {
    const products = await Product.find().populate("categories");
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
