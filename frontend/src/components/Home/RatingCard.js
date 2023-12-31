import React from "react";
// import { FaRegStar } from "react-icons/fa";

const RatingCard = ({ imageSrc, name, detail, price, maxWidth, marginTop }) => {
  return (
    <div
      className={`text-center text-[#415161] font-poppins lg:text-center ${maxWidth} ${marginTop}`}
    >
      <img
        src={imageSrc}
        alt="fashion"
        className="min-w-full min-h-[400px]  max-h-[400px] object-cover"
      />
      <span className="mt-4 block">{name}</span>
      <h2 className="font-semibold mt-2 font-poppins ">{detail}</h2>

      <p className="font-bold mt-2">{price}</p>
    </div>
  );
};

export default RatingCard;
