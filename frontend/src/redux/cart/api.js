import { axiosClient } from "../../configs/axios";

export const getUserCart = async (payload) => {
  const res = await axiosClient.get("/user/userCart", {
    params: {
      userId: payload,
    },
  });
  return res;
};
