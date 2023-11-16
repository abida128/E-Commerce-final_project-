import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { BiFilterAlt } from "react-icons/bi";
import { BiFoodTag } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";

const worldWide = () => {
  return (
    <>
      <div className="flex gap-5 items-center justify-around text-center h-72 bg-[#f7fafc]">
        <div className="">
          <i className="flex justify-center text-[#ff5151] text-6xl">
            {" "}
            <TbWorldWww />{" "}
          </i>
          <h1 className="text-2xl font-medium text-gray-600 py-5 px-5">
            Worldwide Shipping
          </h1>
          <p className="text-gray-600">
            It elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar{" "}
            <br /> dapibus leo.
          </p>
        </div>
        <div>
          <i className="flex justify-center text-[#ff5151] text-6xl">
            {" "}
            <BiFilterAlt />{" "}
          </i>
          <h1 className="text-2xl font-medium text-gray-600 py-5">
            Best Quality
          </h1>
          <p className="text-gray-600">
            It elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar{" "}
            <br /> dapibus leo.
          </p>
        </div>
        <div>
          <i className="flex justify-center text-[#ff5151] text-6xl">
            {" "}
            <BiFoodTag />{" "}
          </i>
          <h1 className="text-2xl font-medium text-gray-600 py-5">
            Best Offers
          </h1>
          <p className="text-gray-600">
            It elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar{" "}
            <br /> dapibus leo.
          </p>
        </div>
        <div>
          <i className="flex justify-center text-[#ff5151] text-6xl">
            {" "}
            <GrSecure />{" "}
          </i>
          <h1 className="text-2xl font-medium text-gray-600 py-5">
            Secure Payments
          </h1>
          <p className="text-gray-600">
            It elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar{" "}
            <br /> dapibus leo.
          </p>
        </div>
      </div>
    </>
  );
};

export default worldWide;
