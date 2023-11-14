import React from "react";

import MainCard from "../../components/sections/MainCard";
import DisplayCard from "../../components/sections/DisplayCard";
import ShopNow from "../../components/sections/ShopNow";
import NewProductCard from "../../components/sections/NewProductCard";
import SaleCard from "../../components/sections/SaleCard";
import TestiMonial from "../../components/sections/TestiMonial";
import LogoSection from "../../components/sections/LogoSection";

const Home = () => {
  return (
    <div className="container m-auto">
      <MainCard />
      <DisplayCard />
      <NewProductCard />
      <ShopNow />
      <SaleCard />
      <TestiMonial />
      <LogoSection />
    </div>
  );
};
export default Home;
