import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <div className="product-card-container">
      <Products />
      </div>
    </Fragment>
  );
};

export default Home;
