import React from "react";

const Card = ({
  imageSrc,
  title,
  description,
  maxWidth,
  marginTop,
 
}) => {
  return (
    <div
      className={`text-center text-[#415161] font-poppins lg:text-left ${maxWidth} ${marginTop}`}
    >
      <img src={imageSrc} alt="fashion" />
      <p className="mt-2">{title}</p>
      <h5 className="font-semibold mt-2">{description}</h5>
      
    </div>
  );
};

export default Card;
