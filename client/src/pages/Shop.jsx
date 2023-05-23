

import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import Input from "../components/Input";
import axios from "axios";
import Sidebar from "../components/SideBar";
import { useParams } from "react-router-dom";

const Shop=()=>{
  const [min, setMin]=useState(0)
  const [max, setMax]=useState(0)
  const {category} = useParams()
  
  
  
  const [products, setProducts]=useState([])
  
// const filterPrice= products.filter((product)=>product.price>=min && product.price<=max)
  const getAllProducts= async()=> {
const {data}=await axios.get('/api/products')
setProducts([...products,...data.rows])
  }

  const getByCategory = async () => {
    const res = await axios.get(`/api/products/${category}`)
  }

  useEffect(()=>{
getAllProducts()

  }, [])

  useEffect(()=>{
    getByCategory()}, [])

  return(

    <div className="shop">

    s<Sidebar />
    
    <div className="allProducts">
    {products?.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>

    <div className="filter">
    {/* <Input  name={filterPrice} type="range"  min={100} setMin={(e)=>(e.target.value)} max={500} steps={0.25} setMax={(e)=>(e.target.value)}/> */}
      </div>
    </div>
  )
}

export default Shop;