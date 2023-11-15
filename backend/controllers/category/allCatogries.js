const { Categories } = require("../../models");

module.exports = async (req, res) => {
  try {
    const allCategories = await Categories.find();

    res.json(allCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
