import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ShopNow = () => {
  return (
    <>
      {/* Fourth section */}

      <div className="Fourth-section shopnow flex container m-auto flex-col-reverse lg:flex-row min-h-[700px] bg-transparent mt-[10%]">
        <div className="  m-auto w-[80%] ">
          <div className="text-[#415161] text-2xl font-poppins mt-6">
            <h1>Hurry Up!</h1>
          </div>
          <div className="text-5xl font-semibold mt-6 leading-10">
            <h1>Deal of the Day!</h1>
          </div>
          <div className="mt-6 text-[#415161] font-poppins text-semibold">
            <h3>Buy This T-shirt At 20% Discount, Use Code Off20</h3>
          </div>

          <div className="mt-6 flex gap-5 font-[poppins, sans-serif]">
            <button className="flex bg-red-500 text-white px-6 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                Shop Now
                <i className="h-5">
                  <FaAngleRight />
                </i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopNow;
