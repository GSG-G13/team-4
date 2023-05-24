
import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import Input from "../components/Input";
import axios from "axios";
import Sidebar from "../components/SideBar";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)



  const [products, setProducts] = useState([])

  // const filterPrice= products.filter((product)=>product.price>=min && product.price<=max)
  const getAllProducts = async () => {
    const { data } = await axios.get('/api/products')
    // console.log(data.rows);
    setProducts([...products, ...data.rows])
  }


  useEffect(() => {
    getAllProducts()

  useEffect(() => {
    getAllProducts();
  }, []);

 
  return (

    <div className="shop">

      <div className="allProducts">
        {products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

    </div>
  )
}

export default Shop;
