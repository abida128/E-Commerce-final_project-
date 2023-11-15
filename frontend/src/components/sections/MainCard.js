import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Image from "../../Assets/images/girl.png";

const MainCard = () => {
  return (
    <>
      {/* first section */}

      <div className=" flex  m-auto flex-col-reverse lg:flex-row justify-around bg-gray-100 pt-[100px]">
        <div className=" py-8 px-10 mt-10 m-auto max-w-[40%] sm:w-[80%]">
          <div className="text-center flex justify-start mt-5">
            <hr className="bg-[#ff5151] h-[4px] w-[80px] " />
          </div>

          <div className="text-[#415161] font-poppins mt-6">
            <h5>Best Quality Products</h5>
          </div>
          <div className="text-[10px] sm:text-3xl md:text-5xl max-w-[14ch] font-semibold mt-6 leading-20">
            <h1>We Print What You Want!</h1>
          </div>
          <div className="mt-6 text-[#415161] font-poppins ">
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sapien.
            </p>
          </div>

          <div className="mt-6 flex gap-5 font-[poppins, sans-serif]">
            <button className="flex bg-red-500 text-white px-6 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                GET STARTED
                <i className="h-5">
                  <FaAngleRight />
                </i>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <img src={Image} alt="fashion girl" className="h-[614px] w-[538px]" />
        </div>
      </div>
    </>
  );
};

export default MainCard;
