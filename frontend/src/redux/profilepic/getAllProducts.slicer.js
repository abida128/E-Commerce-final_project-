import { getAllProducts } from "./getAllProducts.action";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isProductFetching: false,
  isProductFetched: false,
  isProductFailedToFetched: false,
  allProducts: [],
};

const getAllProductsSlicer = createSlice({
  name: "getAllProducts",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isProductFetching = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isProductFetching = false;
      state.isProductFetched = true;
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.isProductFetching = false;
      state.isProductFetched = false;
      state.isProductFailedToFetched = true;
    },
  },
});

export default getAllProductsSlicer.reducer;
