import { combineReducers } from "@reduxjs/toolkit";
import getAllProductsSlicer from "./profilepic/getAllProducts.slicer";
import getUserDataCart from "./cart/getUserCartData.slicer";

const rootReducer = combineReducers({
  getAllProductsSlicer: getAllProductsSlicer,
  getUserDataCart: getUserDataCart,
});

export default rootReducer;
