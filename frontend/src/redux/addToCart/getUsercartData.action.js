import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartApi } from "./api";
import { toast } from "react-hot-toast";

export const addToCart = createAsyncThunk("user/addToCart", async (payload) => {
  const resultPromise = new Promise((resolve, reject) => {
    addToCartApi(payload)
      .then(({ data }) => {
        resolve(data);
        return data;
      })
      .catch(({ response }) => {
        reject(response.data?.error || "Something went wrong");
      });
  });

  toast.promise(resultPromise, {
    loading: "adding product to cart",
    success: "adding to cart successfully",
    error: (err) => err,
  });

  return await resultPromise;
});
