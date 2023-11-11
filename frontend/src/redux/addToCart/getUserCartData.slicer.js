import { addToCart } from "./getUsercartData.action";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAddingFetching: false,
  isCartFetched: false,
  isCartFailedToFetched: false,
  allCarts: [],
};

const addProductToCart = createSlice({
  name: "addToCart",
  initialState,
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.isCartFetching = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.isCartFetching = false;
      state.isCartFetched = true;
      state.allCarts = action.payload;
    },
    [addToCart.rejected]: (state) => {
      state.isCartFetching = false;
      state.isCartFetched = false;
      state.isCartFailedToFetched = true;
    },
  },
});

export default addProductToCart.reducer;
