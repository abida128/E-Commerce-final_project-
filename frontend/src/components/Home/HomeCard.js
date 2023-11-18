import React from "react";

const Card = ({
  imageSrc,
  title,
  description,
  maxWidth,
  marginTop,
  isMiddle = false,
}) => {
  return (
    <div
      className={`${
        isMiddle ? "flex flex-col-reverse" : "flex flex-col"
      } text-center items-center text-[#415161] font-[poppins, sans-serif] lg:text-left ${maxWidth} ${marginTop}`}
    >
      <img src={imageSrc} alt="fashion" width="100%" />
      <p className="mt-2">{title}</p>
      <h5 className="font-semibold mt-2">{description}</h5>
    </div>
  );
};

export default Card;
