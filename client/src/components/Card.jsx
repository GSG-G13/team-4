
import React from 'react';
import '../style/Card.css'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  return (
    <div key={product.id} className="product-card">
      <div className="product-image">
     <img src={product.image} />
      </div>5
      <div className="product-title">
        <Link to={`/product/` + product.id}>{product.title}</Link>
      <h2 >{product.title}</h2>
</div>

<div className="product-price">
<p >{product.price}</p>
</div>

    </div>
  );
};

export default ProductCard;
