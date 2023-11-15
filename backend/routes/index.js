const indexRouter = require("express").Router();
const userRoute = require("./user");
const categoryRouter = require("./category");

indexRouter.use("/user", userRoute);
indexRouter.use("/product", require("./product"));
indexRouter.use("/category", categoryRouter);
//hello

module.exports = indexRouter;
