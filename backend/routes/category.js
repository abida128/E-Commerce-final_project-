const addCategory = require("../controllers/category/addCategory");
const allCatogries = require("../controllers/category/allCatogries");
const categoryRouter = require("express").Router();

categoryRouter
  .post("/addCategory", addCategory)
  .get("/allCategories", allCatogries);

module.exports = categoryRouter;
