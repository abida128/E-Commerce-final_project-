const authRouter = require("express").Router();
const login = require("../controllers/user/login");
const registerController = require("../controllers/user/register");

authRouter.post("/register", registerController).post("/login", login);
module.exports = authRouter;
