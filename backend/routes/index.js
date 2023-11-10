const indexRouter = require("express").Router();
const userRoute = require("./user");

indexRouter.use("/user", userRoute);
indexRouter.use("/product", require("./product"));
//hello

module.exports = indexRouter;
