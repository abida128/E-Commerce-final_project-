import React from "react";
import Image from "../../Assets/images/girl.png";
import { FaAngleRight } from "react-icons/fa";
import Image1 from "../../Assets/images/fashion_.png";
import Image2 from "../../Assets/images/fashion__.png";
import Image3 from "../../Assets/images/fashion___.png";
import Img1 from "../../Assets/images/mug-white.png";
import Img2 from "../../Assets/images/mug-coffee.jpg";
import Img3 from "../../Assets/images/mug-yellow.jpg";
import Img4 from "../../Assets/images/mug-blue.jpg";


import Imag1 from '../../Assets/images/tshirt.jpg'
import Imag2 from '../../Assets/images/tshirt6.jpg'
import Imag3 from '../../Assets/images/tshirt2.jpg'
import Imag4 from '../../Assets/images/tshirt5.jpg'

import Card from "../../components/Home/HomeCard";
import ProductCard from "../../components/Home/ProductCard";
import RatingCard from "../../components/Home/RatingCard";

function Home() {
  return (
    <div>

   {/* first section */}

       <div className=" flex container m-auto flex-col-reverse lg:flex-row justify-around bg-gray-100">
        <div className=" py-8 px-10 mt-10 m-auto w-[45%] sm:w-[80%]">
          <div className="text-center flex justify-start mt-5">
            <hr className="bg-[#ff5151] h-[4px] w-[80px] " />
          </div>

          <div className="text-[#415161] font-poppins mt-6">
            <h5>Best Quality Products</h5>
          </div>
          <div className="text-2xl font-semibold mt-6 leading-10">
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

{/* second section */}
      <div className="flex flex-col container m-auto lg:flex-row justify-around items-center mt-8 lg:mt-0 pt-[100px]">
        <Card
          imageSrc={Image2}
          title="Most Loved Designs"
          description="Customize Your T-Shirts"
          maxWidth="w-64 lg:w-[350px]"
        />
        <Card
          title="Design Of the Week"
          description="Rubber Print Your T-Shirt"
          maxWidth="w-64 lg:w-[350px]"
          marginTop="mt-5" // Add margin-top to the second card
          imageSrc={Image1}
        />
        <Card
          imageSrc={Image3}
          title="New T-shirt Edition"
          description="Customize Plain Color"
          maxWidth="w-64 lg:w-[350px]"
        />
      </div>
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
      {/* Fourth section */}

      <div className="Fourth-section shopnow flex container m-auto flex-col-reverse lg:flex-row h-[600px] bg-transparent mt-[10%]">
        <div className="  m-auto w-[80%] ">
          <div className="text-[#415161] font-poppins mt-6">
            <h1>Hurry Up!</h1>
          </div>
          <div className="text-2xl font-semibold mt-6 leading-10">
            <h1>Deal of the Day!</h1>
          </div>
          <div className="mt-6 text-[#415161] font-poppins text-semibold">
            <h3>Buy This T-shirt At 20% Discount, Use Code Off20</h3>
          </div>

          <div className="mt-6 flex gap-5 font-[poppins, sans-serif]">
            <button className="flex bg-red-500 text-white px-6 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                Shop Now
                <i className="h-5">
                  <FaAngleRight />
                </i>
              </div>
            </button>
          </div>
        </div>
      </div>
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
      {/* Sixth Section */}
      <div>
      <div className="section-heading  m-10">
        <div className="text-center mt-10 text-[#415161] pt-[50px] font-semibold font-poppins">
          <h2 className="text-[32px]">Our Happy Clients!</h2>
          <div className="text-center flex justify-center mt-5">
            <hr className="bg-[#ff5151] h-[4px] w-[80px] text-center" />
          </div>
        </div>
      </div>

      </div>


    </div>
  );
}

export default Home;
