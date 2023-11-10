const productRouter = require("express").Router();
const productController = require("../controllers/product/addProduct");
const addToCart = require("../controllers/product/addToCart");
const allProducts = require("../controllers/product/allProducts");
const useUploadFile = require("../middleware/useUploadFile");

productRouter
  .post("/addProduct", useUploadFile, productController)
  .get("/allProducts", allProducts)
  .post("/addTocart", addToCart);

module.exports = productRouter;
