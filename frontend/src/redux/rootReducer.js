import { combineReducers } from "@reduxjs/toolkit";
import getAllProductsSlicer from "./profilepic/getAllProducts.slicer";

const rootReducer = combineReducers({
  getAllProductsSlicer: getAllProductsSlicer,
});

export default rootReducer;
