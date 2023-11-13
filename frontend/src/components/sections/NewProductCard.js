import React from 'react';
import RatingCard from "../Home/RatingCard";
import Img1 from "../../Assets/images/mug-white.png";
import Img2 from "../../Assets/images/mug-coffee.jpg";
import Img3 from "../../Assets/images/mug-yellow.jpg";
import Img4 from "../../Assets/images/mug-blue.jpg";

const NewProductCard = () => {
  return (
    <>
      {/* Third section */}
<div className="third-section">
      <div className="section-heading  m-10">
        <div className="text-center mt-10 text-[#415161] pt-[50px] font-semibold font-poppins">
          <h2 className="text-[32px]">Our Featured Products</h2>
          <div className="text-center flex justify-center mt-5">
            <hr className="bg-[#ff5151] h-[4px] w-[80px] text-center" />
          </div>
        </div>
      </div>
      <div className="flex text-center container m-auto  gap-[25px]">
        <RatingCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Img1}
          name="Mugs"
          detail="Black Printed Coffee Mug"
          maxWidth="w-64 lg:w-[350px]"
          price="£15.00"
        />
        <RatingCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Img2}
          name="Mugs"
          detail="White Printed Coffee Mug"
          maxWidth="w-64 lg:w-[350px]"
          price="£15.00"
        />
        <RatingCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Img3}
          name="Mugs"
          detail="Father’s Day Coffee Mug"
          maxWidth="w-64 lg:w-[350px]"
          price="£15.00"
        />

        <RatingCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Img4}
          name="Mugs"
          detail="Personalised Mug"
          maxWidth="w-64 lg:w-[350px]"
          price="£15.00"
        />
      </div>
      </div>
    </>
  )
}

export default NewProductCard;
