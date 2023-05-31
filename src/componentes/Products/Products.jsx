import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import ProductCard from "./ProductCard";
import "./Products.css";

export const Products = () => {
  const { products, buyProducts, filterProducts } = useContext(dataContext);
 

  return (
    <div className="Products">
      <select className="selectFilter" onChange={event=> filterProducts(event.target.value)}>
        <option value="Todos">Todos</option>
        <option value="Frutos Secos">Frutos Secos</option>
        <option value="Granola">Granola</option>
      </select>
      <div className="cardsProducts">
      {products.map((product) => <ProductCard product={product} buyProducts={buyProducts} />)}
      </div>
    </div>
    
)
};

export default Products;
