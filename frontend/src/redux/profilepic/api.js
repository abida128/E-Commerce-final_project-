import { axiosClient } from "../../configs/axios";

export const getAllProductsApi = async (payload) => {
  const res = await axiosClient.get("/product/allProducts", {
    params: {
      ...payload,
    },
  });
  return res;
};
