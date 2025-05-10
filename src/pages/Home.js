import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <VerticalCardProduct category={"cloths"} heading={"Top Dresses"} />
      <VerticalCardProduct category={"watches"} heading={"Popular Watches"} />

      <VerticalCardProduct category={"bags"} heading={"Bags"} />
      <VerticalCardProduct category={"necklace"} heading={"Necklace"} />
      <VerticalCardProduct category={"earrings"} heading={"Earrings"} />
      <VerticalCardProduct category={"bangles"} heading={"Bangles"} />
    </div>
  );
};

export default Home;
