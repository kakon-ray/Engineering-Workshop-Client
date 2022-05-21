import React from "react";
import BestOffer from "../Component/BestOffer";
import HomePageBanner from "../Component/HomePageBanner";
import Products from "../Component/Products";

const Home = () => {
  return (
    <div>
      <HomePageBanner></HomePageBanner>
      <Products></Products>
      <BestOffer></BestOffer>
    </div>
  );
};

export default Home;
