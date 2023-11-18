import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import AvatarDropdown from "./avatar";
import Button from "./button";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./drawer";
import Drawer from "./drawer";
import { useSelector } from "react-redux";

function Header() {
  const { user, logout, loading } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    isCartFetching,
    allCarts: { items },
  } = useSelector((state) => state.getUserDataCart);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isActivePage = (pathname) => location.pathname === pathname;
  const handleLogin = () => {
    navigate("/login");
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <header
      class={`${
        isHomePage ? "absolute w-full min-w-full" : "fixed"
      }bg-transparent-500 py-8  px-10 max-h-[100px]`}
    >
      <div class="mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="124.455px"
            height="37.916px"
            viewBox="2.779 4.416 124.455 37.916"
            enable-background="new 2.779 4.416 124.455 37.916"
          >
            <g>
              <g>
                <circle
                  opacity="0.77"
                  fill="#FF5A44"
                  cx="15.418"
                  cy="17.055"
                  r="12.639"
                />
                <circle
                  opacity="0.6"
                  fill="#F74234"
                  cx="30.751"
                  cy="17.055"
                  r="12.638"
                />
                <circle
                  opacity="0.6"
                  fill="#EF3022"
                  cx="22.945"
                  cy="29.693"
                  r="12.639"
                />
              </g>
              <g>
                <path
                  fill="#415161"
                  d="M53.226,15.843c1.239-1.717,3.017-2.576,5.331-2.576c2.315,0,4.275,0.875,5.885,2.625    c1.607,1.75,2.412,3.983,2.412,6.7c0,2.716-0.805,4.946-2.412,6.683c-1.61,1.739-3.554,2.608-5.836,2.608s-4.076-0.955-5.38-2.868    v11.313H47.65V13.463h5.575V15.843z M59.975,25.902c0.804-0.772,1.207-1.876,1.207-3.31s-0.403-2.543-1.207-3.326    c-0.805-0.783-1.728-1.174-2.771-1.174c-1.043,0-1.967,0.387-2.771,1.158c-0.805,0.771-1.207,1.875-1.207,3.309    s0.402,2.543,1.207,3.325c0.804,0.782,1.728,1.175,2.771,1.175C58.247,27.06,59.17,26.674,59.975,25.902z"
                />
                <path
                  fill="#415161"
                  d="M75.983,13.463v3.39c1.304-2.391,3.042-3.586,5.216-3.586v5.674H79.83c-1.283,0-2.245,0.304-2.886,0.913    c-0.641,0.608-0.961,1.673-0.961,3.194v8.608h-5.576V13.463H75.983z"
                />
                <path
                  fill="#415161"
                  d="M89.318,11.41c-0.631,0.63-1.402,0.945-2.315,0.945s-1.686-0.315-2.314-0.945    c-0.632-0.631-0.945-1.407-0.945-2.331c0-0.924,0.313-1.701,0.945-2.331c0.629-0.63,1.401-0.946,2.314-0.946    s1.685,0.315,2.315,0.946c0.63,0.63,0.945,1.407,0.945,2.331C90.264,10.002,89.948,10.779,89.318,11.41z M84.231,31.656V13.463    h5.576v18.193H84.231z"
                />
                <path
                  fill="#415161"
                  d="M100.273,13.463v2.673c1.151-1.912,2.987-2.869,5.509-2.869c2.087,0,3.777,0.696,5.07,2.087    c1.293,1.391,1.939,3.282,1.939,5.672v10.629h-5.542v-9.878c0-1.174-0.31-2.082-0.93-2.723c-0.619-0.64-1.473-0.962-2.56-0.962    c-1.086,0-1.939,0.322-2.56,0.962c-0.619,0.641-0.928,1.549-0.928,2.723v9.878h-5.576V13.463H100.273z"
                />
                <path
                  fill="#415161"
                  d="M125.246,26.929h1.988v4.728h-2.836c-2.044,0-3.625-0.451-4.744-1.354c-1.12-0.9-1.679-2.45-1.679-4.645    v-7.564h-1.695v-4.629h1.695V9.03h5.575v4.434h3.651v4.629h-3.651v7.564C123.551,26.505,124.116,26.929,125.246,26.929z"
                />
              </g>
            </g>
          </svg>
        </div>
        <nav class="space-x-4">
          <Link
            to="/"
            className={`${
              isActivePage("/") ? "text-[#ff3f26] font-bold" : "text-[#415161]"
            } hover:text-[#ff3f26]`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`${
              isActivePage("/products")
                ? "text-[#ff3f26] font-bold"
                : "text-[#415161]"
            } hover:text-[#ff3f26]`}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={`${
              isActivePage("/contact")
                ? "text-[#ff3f26] font-bold"
                : "text-[#415161]"
            } hover:text-[#ff3f26]`}
          >
            Contact
          </Link>
          <Link
            to="/aboutUs"
            className={`${
              isActivePage("/aboutUs")
                ? "text-[#ff3f26] font-bold"
                : "text-[#415161]"
            } hover:text-[#ff3f26]`}
          >
            About
          </Link>
        </nav>
        <div class="flex items-center space-x-4">
          <button onClick={openDrawer} className="relative">
            <svg
              version="1.1"
              id="ast-basket-icon-svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="826 826 140 140"
              enable-background="new 826 826 140 140"
              color="#ff5151"
              stroke="#ff5151"
            >
              <path d="M955.418,887.512c2.344,0,4.343,0.829,6.002,2.486c1.657,1.659,2.486,3.659,2.486,6.002c0,2.343-0.829,4.344-2.486,6.001  c-1.659,1.658-3.658,2.487-6.002,2.487h-0.994l-7.627,43.9c-0.354,2.033-1.326,3.713-2.917,5.04  c-1.593,1.326-3.405,1.989-5.438,1.989h-84.883c-2.033,0-3.846-0.663-5.438-1.989c-1.591-1.327-2.564-3.007-2.918-5.04l-7.626-43.9  h-0.995c-2.343,0-4.344-0.829-6.001-2.487c-1.658-1.657-2.487-3.658-2.487-6.001c0-2.343,0.829-4.343,2.487-6.002  c1.658-1.658,3.659-2.486,6.001-2.486H955.418z M860.256,940.563c1.149-0.089,2.111-0.585,2.885-1.491  c0.773-0.907,1.116-1.936,1.028-3.085l-2.122-27.586c-0.088-1.15-0.585-2.111-1.492-2.885c-0.906-0.774-1.934-1.117-3.083-1.028  c-1.149,0.088-2.111,0.586-2.885,1.492s-1.116,1.934-1.028,3.083l2.122,27.587c0.088,1.105,0.542,2.034,1.359,2.785  c0.818,0.752,1.78,1.128,2.885,1.128H860.256z M887.512,936.319v-27.587c0-1.149-0.42-2.144-1.26-2.984  c-0.84-0.84-1.834-1.26-2.984-1.26s-2.144,0.42-2.984,1.26c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984  c0.84,0.84,1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26C887.092,938.464,887.512,937.469,887.512,936.319z M912.977,936.319  v-27.587c0-1.149-0.42-2.144-1.26-2.984c-0.841-0.84-1.835-1.26-2.984-1.26s-2.145,0.42-2.984,1.26  c-0.84,0.841-1.26,1.835-1.26,2.984v27.587c0,1.149,0.42,2.145,1.26,2.984s1.835,1.26,2.984,1.26s2.144-0.42,2.984-1.26  C912.557,938.464,912.977,937.469,912.977,936.319z M936.319,936.65l2.122-27.587c0.088-1.149-0.254-2.177-1.027-3.083  s-1.735-1.404-2.885-1.492c-1.15-0.089-2.178,0.254-3.084,1.028c-0.906,0.773-1.404,1.734-1.492,2.885l-2.122,27.586  c-0.088,1.149,0.254,2.178,1.027,3.085c0.774,0.906,1.736,1.402,2.885,1.491h0.332c1.105,0,2.066-0.376,2.885-1.128  C935.777,938.685,936.23,937.756,936.319,936.65z M859.66,855.946l-6.167,27.322h-8.753l6.698-29.245  c0.84-3.89,2.807-7.062,5.902-9.516c3.095-2.453,6.632-3.68,10.611-3.68h11.074c0-1.149,0.42-2.144,1.26-2.984  c0.84-0.84,1.835-1.26,2.984-1.26h25.465c1.149,0,2.144,0.42,2.984,1.26c0.84,0.84,1.26,1.834,1.26,2.984h11.074  c3.979,0,7.516,1.227,10.611,3.68c3.094,2.454,5.062,5.626,5.901,9.516l6.697,29.245h-8.753l-6.168-27.322  c-0.486-1.945-1.491-3.537-3.017-4.774c-1.525-1.238-3.282-1.857-5.272-1.857h-11.074c0,1.15-0.42,2.144-1.26,2.984  c-0.841,0.84-1.835,1.26-2.984,1.26h-25.465c-1.149,0-2.144-0.42-2.984-1.26c-0.84-0.84-1.26-1.834-1.26-2.984h-11.074  c-1.99,0-3.747,0.619-5.272,1.857C861.152,852.409,860.146,854,859.66,855.946z"></path>
            </svg>
            {items?.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs">
                {items.length}
              </span>
            )}
          </button>
          {user && <AvatarDropdown logout={logout} user={user} />}
          {!user && <Button label="Login" onClick={handleLogin} />}
        </div>
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </header>
  );
}

export default Header;
