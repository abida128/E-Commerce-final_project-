const indexRouter = require("express").Router();
const userRoute = require("./user");

indexRouter.use("/user", userRoute);
//hello

module.exports = indexRouter;
