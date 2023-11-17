import React, { useEffect, useState } from "react";
import Imag1 from "../../Assets/images/tshirt.jpg";
import Imag2 from "../../Assets/images/tshirt6.jpg";
import Imag3 from "../../Assets/images/tshirt2.jpg";
import Imag4 from "../../Assets/images/tshirt5.jpg";
import ProductCard from "../../components/Home/ProductCard";
import { axiosClient } from "../../configs/axios";

const SaleCard = () => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    // Make the API call when the component mounts
    axiosClient
      .get("/product/allProducts", {
        params: {
          category: "65570f568ec4ad4a07994b8a",
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
      {/* Fifth section */}
      <div className="fifth-section">
        <div className="section-heading  m-10">
          <div className="text-center mt-10 text-[#415161] pt-[50px] font-semibold font-poppins">
            <h2 className="text-[32px]">Most Loved Products</h2>
            <div className="text-center flex justify-center mt-5">
              <hr className="bg-[#ff5151] h-[4px] w-[80px] text-center" />
            </div>
          </div>
        </div>
        <div className="flex text-center container m-auto  gap-[25px]">
          {allCategory?.slice(0, 4).map(({ image, name, price }) => {
            return (
              <ProductCard
                className="h-auto w-[10%] px-2 m-4"
                imageSrc={"http://localhost:8080/uploads/" + image}
                product="Tshirts"
                description="Blue Printed Tshirt"
                maxWidth="w-64 lg:w-[350px]"
                marginTop="mt-5"
                price={`${price}$`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SaleCard;
