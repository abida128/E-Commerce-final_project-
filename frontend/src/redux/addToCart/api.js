import { axiosClient } from "../../configs/axios";

export const addToCartApi = async (payload) => {
  const res = await axiosClient.post("/product/addTocart", null, {
    params: {
      ...payload,
    },
  });
  return res;
};
