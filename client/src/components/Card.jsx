
import React from 'react';
import '../style/Card.css'

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
      <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpm8DV7JQWT_KvuwyVazlxGFgzyHWqBfJz6dtZuTFKw&s " alt="Product"  />

      </div>
      <div className="product-title">
      <h2 >Product Title</h2>
</div>

<div className="product-price">
<p >$99.98</p>
</div>

    </div>
  );
};

export default ProductCard;
