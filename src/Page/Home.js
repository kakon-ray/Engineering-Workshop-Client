import React from "react";

import BusinessSummery from "../Component/BusinessSummery";
import Catagory from "../Component/Catagory";
import HomePageBanner from "../Component/HomePageBanner";
import Products from "../Component/Products";

import Review from "../Component/Review";
import MetTheTem from "../Component/MetTheTem";

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <Products></Products>
      <BusinessSummery />
      <Catagory></Catagory>
      <MetTheTem></MetTheTem>
      <Review />
    </div>
  );
};

export default Home;
