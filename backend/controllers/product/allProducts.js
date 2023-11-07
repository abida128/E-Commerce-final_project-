const { Product } = require("../../models");

module.exports = async (req, res) => {
  try {
    const category = req.query.category;
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);

    let query = {};
    console.log(req.query, "query");

    if (category) {
      query.categories = category;
    }

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      query.price = { $gte: minPrice, $lte: maxPrice };
    }

    const products = await Product.find(query).populate("categories");
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
