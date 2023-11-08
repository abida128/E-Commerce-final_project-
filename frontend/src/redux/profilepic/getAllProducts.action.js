import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsApi } from "./api";

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      getAllProductsApi(payload)
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
