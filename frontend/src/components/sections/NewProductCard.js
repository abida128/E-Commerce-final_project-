import React, { useEffect, useState } from "react";
import RatingCard from "../Home/RatingCard";
import Img1 from "../../Assets/images/mug-white.png";
import Img2 from "../../Assets/images/mug-coffee.jpg";
import Img3 from "../../Assets/images/mug-yellow.jpg";
import Img4 from "../../Assets/images/mug-blue.jpg";
import { axiosClient } from "../../configs/axios";

const NewProductCard = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    // Make the API call when the component mounts
    axiosClient
      .get("/product/allProducts", {
        params: {
          category: "65570f2c8ec4ad4a07994b88",
        },
      })
      .then((response) => {
        setAllCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

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
          {allCategory?.slice(0, 4).map(({ image, name, price }) => {
            return (
              <RatingCard
                className="h-auto w-[10%] px-2 m-4"
                imageSrc={"http://localhost:8080/uploads/" + image}
                name={name}
                detail="Black Printed Coffee Mug"
                maxWidth="w-64 lg:w-[350px]"
                price={`${price}$`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewProductCard;
