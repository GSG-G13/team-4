

import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import axios from "axios";

const Shop=()=>{
  const [products, setProducts]=useState([])

  const getAllProducts= async()=> {
const {data}=await axios.get('http://localhost:9000/products')
// console.log(data.rows);
setProducts([...products,...data.rows])
  }

  useEffect(()=>{
getAllProducts()

  }, [])

  return(
    <>
    <div className="allProducts">
    {products.map((product)=><ProductCard product={product}/>)}

    </div>
    </>
  )
}

export default Shop;