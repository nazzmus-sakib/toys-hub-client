import React from "react";
import Banner from "./Banner";
import Gallary from "./Gallary";
import ShopByCategory from "./ShopByCategory";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <ShopByCategory></ShopByCategory>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
