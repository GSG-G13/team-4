
import React from 'react';
import '../style/Card.css'

const ProductCard = ({product}) => {
  console.log(product,'card');
  return (
    <div className="product-card">
      <div className="product-image">
     <img src={product.image} />
      </div>5
      <div className="product-title">
      <h2 >{product.title}</h2>
</div>

<div className="product-price">
<p >{product.price}</p>
</div>

    </div>
  );
};

export default ProductCard;
