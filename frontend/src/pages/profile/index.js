// ProfilePageComponent.jsx
import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { GuardWrapper } from "../../layouts/GuardWrapper";
import { useAuth } from "../../hooks/useAuth";
import image from "../../Assets/images/fashion__.png";
import Cart from "../../components/cart";

const ProfilePageComponent = (props) => {
  const { user } = useAuth();

  return (
    <GuardWrapper {...props}>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 text-black">
          <div className="flex items-center p-4">
            <img
              src={image}
              alt="Profil"
              className="rounded-full mt-4 w-10 h-10"
            />
            <p className="mt-2">{user?.username}</p>
          </div>
          <nav className="mt-6">
            <a
              href="#add-product"
              className="flex items-center py-2 px-4 text-gray-400 hover:text-white"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              cart Items
            </a>
            <a
              href="#add-category"
              className="flex items-center py-2 px-4 text-gray-400 hover:text-white"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add Category
            </a>
            <a
              href="#show-all-products"
              className="flex items-center py-2 px-4 text-gray-400 hover:text-white"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Show All Products
            </a>
          </nav>
        </aside>

        {/* Vertical Line */}
        <div className="border-r border-gray-300"></div>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {/* Your content goes here */}
          <div className="p-6">
            <h1 className="text-2xl font-semibold">Cart Items</h1>
            <Cart />
          </div>
        </main>
      </div>
    </GuardWrapper>
  );
};

export default ProfilePageComponent;

ProfilePageComponent.defaultProps = {
  getLayout: (page) => <UserLayout>{page}</UserLayout>,
  guestGuard: false,
  authGuard: false,
};
