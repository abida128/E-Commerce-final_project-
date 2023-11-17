import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserCartData } from "../../redux/cart/getUsercartData.action";

import empty from "../../Assets/images/empty.png";
import { useAuth } from "../../hooks/useAuth";
import Button from "../button";
import toast from "react-hot-toast";
import { axiosClient } from "../../configs/axios";

const Cart = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const {
    isCartFetching,
    allCarts: { _id, items },
  } = useSelector((state) => state.getUserDataCart);

  useEffect(() => {
    if (user) dispatch(getUserCartData(user?._id));
  }, [user]);

  const handleDeleteCartItem = (cartId, itemId) => {
    const resultPromise = new Promise((resolve, reject) => {
      deleteCartItem(cartId, itemId)
        .then(() => {
          if (user) dispatch(getUserCartData(user?._id));
          resolve();
        })
        .catch((error) => {
          reject(error.message || "Something went wrong");
        });
    });

    toast.promise(resultPromise, {
      loading: "Deleting cart item...",
      success: "Deleted cart item successfully",
      error: (err) => err,
    });
  };

  // Assume this is your function for making the DELETE request
  const deleteCartItem = async (itemId) => {
    try {
      const response = await axiosClient.delete(
        `/user/deleteCartItem/${_id}/${itemId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="flex flex-col ">
      {items ? (
        items.map(({ quantity, _id, product: { name, image, price } }) => {
          return (
            <div className="px-10">
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>
              <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                  <div class="w-20">
                    <img
                      class="h-[70px]"
                      src={"http://localhost:8080/uploads/" + image}
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{name}</span>

                    <p
                      class="cursor-pointer  font-semibold hover:text-white-500 text-white text-xs bg-red-500 rounded-xl flex justify-center"
                      onClick={() => {
                        handleDeleteCartItem(_id);
                      }}
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">{quantity}</div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${price}.00
                </span>
                <span class="text-center w-1/5 font-semibold text-sm">
                  ${quantity * price}.00
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center ">No cart items to show</h1>
          <img src={empty} className="max-h-[100px]" />
        </div>
      )}

      {items && (
        <div className="mx-auto mt-10">
          <Button label="Checkout" />
        </div>
      )}
    </div>
  );
};

export default Cart;
