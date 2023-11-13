import React from 'react';
import Image1 from "../../Assets/images/fashion_.png";
import Image2 from "../../Assets/images/fashion__.png";
import Image3 from "../../Assets/images/fashion___.png";
import Card from "../../components/Home/HomeCard";


const DisplayCard = () => {
  return (
    <>
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
 
    </>
  )
}

export default DisplayCard
