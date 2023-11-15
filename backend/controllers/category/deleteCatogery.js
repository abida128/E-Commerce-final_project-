const { Categories } = require("../../models");

module.exports = async (req, res, next) => {
  console.log("sls");
  try {
    const categoryId = req.params.categoryId;

    // Check if the categoryId is provided
    if (!categoryId) {
      return res.status(400).json({ error: "Category ID is required." });
    }

    // Find the category by ID and delete it
    const deletedCategory = await Categories.findByIdAndDelete(categoryId);

    // Check if the category was found and deleted
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found." });
    }

    res.json({ message: "Category deleted successfully." });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};
