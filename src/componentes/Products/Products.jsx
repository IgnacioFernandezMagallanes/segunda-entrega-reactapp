import React from "react";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

export const Products = () => {
  const {data, buyProducts} = useContext(dataContext);

  


  return data.map((product)=>{
    return(
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"/>
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <h4>${product.price}</h4>
            <button onClick={()=>buyProducts(product)}>Comprar</button>
        </div>
    )
  });
};

export default Products;
