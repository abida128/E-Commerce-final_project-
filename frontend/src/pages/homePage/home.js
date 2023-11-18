import React from "react";

import MainCard from "../../components/sections/MainCard";
import DisplayCard from "../../components/sections/DisplayCard";
import ShopNow from "../../components/sections/ShopNow";
import NewProductCard from "../../components/sections/NewProductCard";
import SaleCard from "../../components/sections/SaleCard";
import TestiMonial from "../../components/sections/TestiMonial";
import LogoSection from "../../components/sections/LogoSection";
import UserLayout from "../../layouts/UserLayout";
import { GuardWrapper } from "../../layouts/GuardWrapper";

const Home = (props) => {
  return (
    <GuardWrapper {...props}>
      <div className=" ">
        <MainCard />
        <DisplayCard />
        <NewProductCard />
        <ShopNow />
        <SaleCard />
        <TestiMonial />
        <LogoSection />
      </div>
    </GuardWrapper>
  );
};
export default Home;

Home.defaultProps = {
  getLayout: (page) => <UserLayout>{page}</UserLayout>,
  guestGuard: false,
  authGuard: false,
};
