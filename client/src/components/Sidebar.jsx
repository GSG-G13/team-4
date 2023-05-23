import React from 'react'
import '../style/Sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="searchTitle">
          <input type="text"  placeholder='Search for product' className='searchInput'/>
        </div>

        <div className="price">
        <label for="priceBar" className='priceBar'>Price</label>
          <input type="range"  name="price" min="500" max="1000" id="price"/>
        </div>

          <div className="categories">
          <h2>Categories</h2>
          <ul>
            <li >
              <a href="#"  className='active'>Electronics</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Home &amp; Garden</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Toys</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </div>



    </div>
  )
}

export default Sidebar