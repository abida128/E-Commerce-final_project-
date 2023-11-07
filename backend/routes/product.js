const productRouter = require("express").Router();
const productController = require("../controllers/product/addProduct");
const allProducts = require("../controllers/product/allProducts");
const useUploadFile = require("../middleware/useUploadFile");

productRouter
  .post("/addProduct", useUploadFile, productController)
  .get("/allProducts", allProducts);

module.exports = productRouter;
