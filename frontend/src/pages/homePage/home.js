import React from "react";
import Image from "../../Assets/images/girl.png";
import { FaAngleRight } from "react-icons/fa";
import Image1 from "../../Assets/images/fashion_.png";
import Image2 from "../../Assets/images/fashion__.png";
import Image3 from "../../Assets/images/fashion___.png";
import Img from "../../Assets/images/mug-white.png";
import Card from "../../components/Home/HomeCard";
import { GuardWrapper } from "../../layouts/GuardWrapper";

import { SuspenseLayout } from "../../layouts/SuspenseLayout";
import UserLayout from "../../layouts/UserLayout";

function Home(props) {
  return (
    <GuardWrapper {...props}>
      <div>
        <div className=" flex container m-auto flex-col-reverse lg:flex-row justify-around bg-gray-100">
          <div className=" p-4 mt-6  w-[45%]">
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
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sapien.
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
            <img src={Image} alt="fashion girl" />
          </div>
        </div>
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

        <div className="section-heading  m-10">
          <div className="text-center mt-10 text-[#415161] pt-[50px] font-semibold font-poppins">
            <h2 className="text-[32px]">Our Featured Products</h2>
            <div className="text-center flex justify-center mt-5">
              <hr className="bg-[#ff5151] h-[4px] w-[80px] text-center" />
            </div>
          </div>
        </div>
        <div className="flex text-center container m-auto  gap-[25px]">
          <Card
            className="h-auto w-[10%] px-2 m-4"
            imageSrc={Img}
            name="Mugs"
            detail="Black Printed Coffee Mug"
            maxWidth="w-64 lg:w-[350px]"
            price="£15.00"
          />
          <Card
            className="h-auto w-[10%] px-2 m-4"
            imageSrc={Img}
            name="Mugs"
            detail="White Printed Coffee Mug"
            maxWidth="w-64 lg:w-[350px]"
            price="£15.00"
          />
          <Card
            className="h-auto w-[10%] px-2 m-4"
            imageSrc={Img}
            name="Mugs"
            detail="Father’s Day Coffee Mug"
            maxWidth="w-64 lg:w-[350px]"
            price="£15.00"
          />

          <Card
            className="h-auto w-[10%] px-2 m-4"
            imageSrc={Img}
            name="Mugs"
            detail="Personalised Mug"
            maxWidth="w-64 lg:w-[350px]"
            price="£15.00"
          />
        </div>
        <div className=" shopnow flex container m-auto flex-col-reverse lg:flex-row h-[600px] bg-transparent mt-[10%]">
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
      </div>
    </GuardWrapper>
  );
}

Home.defaultProps = {
  getLayout: (page) => <UserLayout>{page}</UserLayout>,
  authGuard: false,
  guestGuard: false,
};

export default Home;
