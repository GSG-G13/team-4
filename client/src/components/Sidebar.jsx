import React from 'react'
import '../style/Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  const categories = ['phone','laptop','accessories'];
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
            {categories.map(category => <li key={category}>
              <Link to={category}  className='active'>{category}</Link>
            </li>)}
          </ul>
        </div>



    </div>
  )
}

export default Sidebar