const productRouter = require("express").Router();
const productController = require("../controllers/product/addProduct");
const useUploadFile = require("../middleware/useUploadFile");

productRouter.post("/addProduct", useUploadFile, productController);

module.exports = productRouter;
