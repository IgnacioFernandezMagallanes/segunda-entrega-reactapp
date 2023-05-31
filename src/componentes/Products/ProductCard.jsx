import React from "react";

const ProductCard = ({ product, buyProducts }) => {
  return (
    <div className="card" key={product.id}>
      <img src={product.img} alt="img-product-card" />
      <h3>{product.name}</h3>
      <h4>{product.description}</h4>
      <h4>${product.price}</h4>
      <button onClick={() => buyProducts(product)}>Comprar</button>
    </div>
  );
};

export default ProductCard;
