const { Categories } = require("../../models");

module.exports = async (req, res, next) => {
  try {
    // Create a new category instance using the request body
    const newCategory = new Categories({
      name: req.body.name,
    });

    // Save the category to the database
    const savedCategory = await newCategory.save();

    // Send the saved category as the response
    res.json(savedCategory);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};
