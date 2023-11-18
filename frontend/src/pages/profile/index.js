import React, { useState } from "react";
import TableProduct from "../../components/allProducts";
import UploadProduct from "../../components/uploadCompo";
import Catogery from "../../components/allCatogeries";

const ProfilePageComponent = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("showAllProducts");

  const menuItems = [
    {
      id: "addProduct",
      label: "Add Product",
      icon: "bx-plus",
      component: <UploadProduct />,
    },
    {
      id: "addCategory",
      label: "Add Category",
      icon: "bx-category",
      component: <Catogery />,
    },
    {
      id: "showAllProducts",
      label: "Show All Products",
      icon: "bx-show",
      component: <TableProduct />,
    },
    // Add more menu items as needed
  ];

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />

      <div className="min-h-screen flex flex-row bg-gray-100">
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                    selectedMenuItem === item.id
                      ? "text-gray-800 font-bold"
                      : "text-gray-500"
                  }`}
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className={`bx ${item.icon}`}></i>
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-grow p-4">
          {/* Render the selected component based on the menu item */}
          {menuItems.find((item) => item.id === selectedMenuItem)?.component}
        </div>
      </div>
    </>
  );
};

export default ProfilePageComponent;
