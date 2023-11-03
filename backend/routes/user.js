const authRouter = require("express").Router();
const login = require("../controllers/user/login");
const meController = require("../controllers/user/me");
const registerController = require("../controllers/user/register");
const useAuth = require("../middleware/useAuth");

authRouter
  .get("/me", useAuth, meController)
  .post("/register", registerController)
  .post("/login", login);
module.exports = authRouter;
