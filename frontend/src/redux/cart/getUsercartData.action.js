import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserCart } from "./api";

export const getUserCartData = createAsyncThunk(
  "user/cartData",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      getUserCart(payload)
        .then(({ data }) => {
          resolve(data);
          return data;
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    return await resultPromise;
  }
);
