import React from "react";
import "../style/card.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <div className="product-image">
        <img src={product.image} />
      </div>
      5
      <div className="product-title">
        <Link to={`/product/` + product.id}>
          <h2>{product.title}</h2>
        </Link>
      </div>
      <div className="product-price">
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
