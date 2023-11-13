import { combineReducers } from "@reduxjs/toolkit";
import getAllProductsSlicer from "./profilepic/getAllProducts.slicer";
import getUserDataCart from "./cart/getUserCartData.slicer";
import addProductToCart from "./addToCart/getUserCartData.slicer";
const rootReducer = combineReducers({
  getAllProductsSlicer: getAllProductsSlicer,
  getUserDataCart: getUserDataCart,
  addProductToCart: addProductToCart,
});

export default rootReducer;
