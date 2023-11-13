import { getUserCartData } from "./getUsercartData.action";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isCartFetching: false,
  isCartFetched: false,
  isCartFailedToFetched: false,
  allCarts: [],
};

const getUserDataCart = createSlice({
  name: "getCart",
  initialState,
  extraReducers: {
    [getUserCartData.pending]: (state) => {
      state.isCartFetching = true;
    },
    [getUserCartData.fulfilled]: (state, action) => {
      state.isCartFetching = false;
      state.isCartFetched = true;
      state.allCarts = action.payload;
    },
    [getUserCartData.rejected]: (state) => {
      state.isCartFetching = false;
      state.isCartFetched = false;
      state.isCartFailedToFetched = true;
    },
  },
});

export default getUserDataCart.reducer;
