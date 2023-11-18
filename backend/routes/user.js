const authRouter = require("express").Router();
const cart = require("../controllers/user/cart");
const login = require("../controllers/user/login");
const meController = require("../controllers/user/me");
const registerController = require("../controllers/user/register");
const deleteCartItem = require("../controllers/user/deleteCartItem");
const useAuth = require("../middleware/useAuth");

authRouter
  .get("/me", useAuth, meController)
  .post("/register", registerController)
  .post("/login", login)
  .get("/userCart", cart)
  .delete("/deleteCartItem/:_id/:itemId", deleteCartItem);
module.exports = authRouter;
