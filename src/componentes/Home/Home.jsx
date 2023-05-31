import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Products />
    </Fragment>
  );
};

export default Home;
