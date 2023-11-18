const { Product } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { name, price, detail, categories } = req.body;
    if (!name || !price || !detail || !categories) {
      return res.status(401).json({ message: "Data missing!" });
    }
    if (req.file == undefined) {
      return res.status(400).json({ message: "Please uplaod file" });
    }

    const displayImg = req.file.filename;

    const newProduct = new Product({
      name,
      price,
      detail,
      categories,
      image: displayImg,
    });
    await newProduct.save();

    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
