import React, { useEffect } from 'react'
import '../style/details.css'
import Button from './Button'

import '../style/seller.css'
function Details() {
  
  return (
    <div className='details'>
      <div className="card_image">
          <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpm8DV7JQWT_KvuwyVazlxGFgzyHWqBfJz6dtZuTFKw&s" alt="product" />
      </div>

      <div className="card_content">
      <div className="card_title">
          <h1>product title</h1>
      </div>
      
      <div className="card_price">
          <h2>price : $200</h2>
      </div>
      <div className="card_description">
          <p>product description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic odit exercitationem saepe rerum quasi! Quasi corrupti, corporis natus blanditiis minima reiciendis quisquam earum dolorum nam iusto. Magni totam ducimus qui.</p>
      </div>
      <div className="card_btn">
          <Button name="add to cart"/>
      </div>
      </div>


    </div>
  )
}

export default Details
