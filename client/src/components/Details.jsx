import React, { useEffect } from 'react'
import axios from 'axios';

import '../style/details.css'
import Button from './Button'

import '../style/seller.css'
function Details({product}) {
  const addToCart = async () => {
    try {
      await axios.post(`/api/cart/${product.id}`);
      console.log(product.id);
    } catch (error) {
    console.log(error);
    }
  };
  console.log(product);
  
  return (
    <div className='details'>
      <div className="card_image">
          <img src={product.image} alt="product" />
      </div>

      <div className="card_content">
      <div className="card_title">
          <h1>{product.title}</h1>
      </div>
      
      <div className="card_price">
          <h2>price : ${product.price}</h2>
      </div>
      <div className="card_description">
          <p>{product.description}</p>
      </div>
      <div className="card_btn">
          {/* <Button name="add to cart"/> */}
          <button onClick={addToCart}>Add to Cart</button>
      </div>
      </div>


    </div>
  )
}

export default Details
