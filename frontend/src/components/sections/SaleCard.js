import React from 'react';
import Imag1 from '../../Assets/images/tshirt.jpg';
import Imag2 from '../../Assets/images/tshirt6.jpg';
import Imag3 from '../../Assets/images/tshirt2.jpg';
import Imag4 from '../../Assets/images/tshirt5.jpg';
import ProductCard from "../../components/Home/ProductCard";

const SaleCard = () => {
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
        <ProductCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Imag1}
          product ="Tshirts"
          description="Blue Printed Tshirt"
          maxWidth="w-64 lg:w-[350px]"
          marginTop="mt-5"
          price="£134.00"
        />
        <ProductCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Imag2}
          product="Tshirts"
          description=" Printed Brown Tshirt"
          maxWidth="w-64 lg:w-[350px]"
          marginTop="mt-5"
          price="£25.00"
        />
        <ProductCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Imag3}
          product="Tshirts"
          description="Printed Dark Blue Tshirt"
          maxWidth="w-64 lg:w-[350px]"
          marginTop="mt-5"
          price="£15.00"
        />

        <ProductCard
          className="h-auto w-[10%] px-2 m-4"
          imageSrc={Imag4}
          product="Tshirts"
          description="Printed Green Tshirt"
          maxWidth="w-64 lg:w-[350px]"
          marginTop="mt-5"
          price="£15.00"
        />
      </div>

      </div> 
    </>
  )
}

export default SaleCard;
