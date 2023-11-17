// Card component for featured products
import React from "react";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({
  imageSrc,
  product,
  description,
  price,
  maxWidth,
  marginTop,
}) => {
  return (
    <div
      className={`text-center relative text-[#415161] font-poppins lg:text-center ${maxWidth} ${marginTop}`}
    >
      <span className="w-10 h-10 rounded-full bg-red-500 absolute top-[-15px] right-[-8px] px-1  py-3 m text-black">
        Sale!
      </span>
      <img src={imageSrc} alt={product} className="min-w-full" />
      <span className="mt-4 block">{product}</span>
      <h2 className="font-semibold mt-2 font-poppins">{description}</h2>
      {/* <div className="text-center">
        <i className="FaRegStar flex justify-center">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </i>
      </div> */}
      <p className="font-bold mt-2">{price}</p>
    </div>
  );
};

export default ProductCard;
