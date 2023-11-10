import React, { useState } from "react";
import image from "../../Assets/images/fashion__.png";

const AvatarDropdown = ({ logout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left m-4">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-full cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
        onClick={toggleDropdown}
      >
        <img src={image} alt="Avatar" className="w-10 h-10 rounded-full" />
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              type="button"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
