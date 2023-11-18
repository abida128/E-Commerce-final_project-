const productRouter = require("express").Router();
const productController = require("../controllers/product/addProduct");
const addToCart = require("../controllers/product/addToCart");
const allProducts = require("../controllers/product/allProducts");
const getSingleProducts = require("../controllers/product/getSingleProducts");
const useUploadFile = require("../middleware/useUploadFile");
const deleteProduct = require("../controllers/product/deleteProduct");

productRouter
  .post("/addProduct", useUploadFile, productController)
  .get("/allProducts", allProducts)
  .post("/addTocart", addToCart)
  .get("/singleProduct", getSingleProducts)
  .delete("/deleteProduct/:id", deleteProduct);

module.exports = productRouter;
