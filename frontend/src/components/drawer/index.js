import React from "react";
import Cart from "../cart";

const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  return (
    <div>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto">
          <div className="no-scrollbar fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-lg overflow-y-auto scrollbar-hide">
            <div className="flex justify-end p-4">
              {/* Close button */}
              <button onClick={closeDrawer}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-4">
              <Cart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
