const addCategory = require("../controllers/category/addCategory");
const allCatogries = require("../controllers/category/allCatogries");
const deleteCatogery = require("../controllers/category/deleteCatogery");
const categoryRouter = require("express").Router();

categoryRouter
  .post("/addCategory", addCategory)
  .get("/allCategories", allCatogries)
  .delete("/deleteCategory/:categoryId", deleteCatogery);

module.exports = categoryRouter;
