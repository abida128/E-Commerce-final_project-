import React from "react";
import { FaRegStar } from "react-icons/fa";

const RatingCard = ({ imageSrc, name, detail, price, maxWidth, marginTop }) => {
  return (
    <div
      className={`text-center text-[#415161] font-poppins lg:text-center ${maxWidth} ${marginTop}`}
    >
      <img src={imageSrc} alt="fashion" />
      <span className="mt-4 block">{name}</span>
      <h2 className="font-semibold mt-2 font-poppins ">{detail}</h2>
      <div className="text-center">
        {/* <i className="FaRegStar flex justify-center">
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </i> */}
      </div>
      <p className="font-bold mt-2">{price}</p>
    </div>
  );
};

export default RatingCard;
