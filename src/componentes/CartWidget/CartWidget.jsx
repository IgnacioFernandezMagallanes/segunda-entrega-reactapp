import React, { Fragment } from "react";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(dataContext);

  return (
    <Fragment>
      <Navbar />
      {cart.length > 0 ? (
        <Fragment>
          <CartElements />
          <CartTotal />
        </Fragment>
      ) : (
        <h2 className="cart-message-center">Tu carrito esta vacio</h2>
      )}
    </Fragment>
  );
};

export default CartWidget;
