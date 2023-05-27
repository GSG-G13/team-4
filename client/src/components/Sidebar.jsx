import React, { useEffect, useState } from "react";
import "../style/Sidebar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function Sidebar({ setPrice, price, setTitle, title }) {
  const categories = ["phone", "laptop", "accessories"];

  return (
    <motion.div
     initial={{ x: -300 }}
     animate={{ x: 0 }}
     transition={{ duration: 0.5,delay:0.5 }}
     className="sidebar"
     >
      <div className="searchTitle">
        <input
          type="text"
          placeholder="Search for product"
          className="searchInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="price">
        <label for="priceBar" className="priceBar">
          Price
        </label>
        <input
          type="range"
          defaultValue={1000}
          name="price"
          min={0}
          max={1000}
          step={50}
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="categories">
        <h2>Categories</h2>
        <ul>
          <Link className="categoryLink" to="/products">All</Link>
          <br />
          <br />
          {categories.map((category) => (
            <li key={category}>
              <Link to={category} className="active categoryLink">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Sidebar;
