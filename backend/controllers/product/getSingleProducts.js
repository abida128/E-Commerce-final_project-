const { Product } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: "please insert id" });
    }

    const prod = await Product.findById(id).populate("categories");

    res.status(200).json({ data: prod });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
