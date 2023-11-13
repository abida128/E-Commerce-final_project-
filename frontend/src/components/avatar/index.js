import React, { useEffect, useState } from "react";
import image from "../../Assets/images/fashion__.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartData } from "../../redux/cart/getUsercartData.action";
import Button from "../button";
import empty from "../../Assets/images/empty.png";

const AvatarDropdown = ({ logout, user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    isCartFetching,
    allCarts: { items },
  } = useSelector((state) => state.getUserDataCart);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    dispatch(getUserCartData(user._id));
  }, []);

  return (
    <div className="relative inline-block text-left ">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-full cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
        onClick={toggleDropdown}
      >
        <img src={image} alt="Avatar" className="w-10 h-10 rounded-full" />
      </button>
      <div class="flex shadow-md ">
        {isDropdownOpen && (
          <div className="min-w-[800px] p-[10px] origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            {items ? (
              items.map(({ quantity, product: { name, image, price } }) => {
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
                            class="h-24"
                            src={"http://localhost:8080/uploads/" + image}
                            alt=""
                          />
                        </div>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                          <span class="font-bold text-sm">{name}</span>
                          <span class="text-red-500 text-xs">Apple</span>
                          <p class="font-semibold hover:text-red-500 text-gray-500 text-xs">
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
            <div className="py-1 text-center mt-10">
              <Button onClick={logout} label="Logout" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarDropdown;
