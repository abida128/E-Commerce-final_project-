import React, { useEffect, useState } from "react";
import image from "../../Assets/images/fashion__.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserCartData } from "../../redux/cart/getUsercartData.action";
import Button from "../button";
import empty from "../../Assets/images/empty.png";
import { Link } from "react-router-dom";

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
          <div className=" p-[10px] origin-top-right absolute right-0  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="border-b">
              <Link to="/profile" class="px-4 py-2 hover:bg-gray-100 flex">
                <div class="text-gray-800">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    class="w-5 h-5"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="pl-3">
                  <p class="text-sm font-medium text-gray-800 leading-none">
                    Dashboard
                  </p>
                  <p class="text-xs text-gray-500">
                    cart/product, users &amp; teams
                  </p>
                </div>
              </Link>
            </div>

            <div class="">
              <p
                class="text-sm font-medium text-gray-800 leading-none mt-4 cursor-pointer"
                onClick={logout}
              >
                Logout
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarDropdown;
