
import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import Input from "../components/Input";
import axios from "axios";
import Sidebar from "../components/SideBar";
import { useParams, useOutletContext } from "react-router-dom";

const Shop = () => {
const props = useOutletContext();
console.log(props);
  const [products, setProducts] = useState([])
  const [filterProduct, setFilterProduct]= useState([])

  const getAllProducts = async () => {
    const { data } = await axios.get('/api/products')
    setProducts([...products, ...data.rows])
  }

  const filteredProductByPrice = async ()=>{
    const {data}=await axios.get(`/api/allProducts/${props}`)
    setFilterProduct(data);
  }


  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(()=>{
filteredProductByPrice()
  },[props])

 
  return (

    <div className="shop">

      <div className="allProducts">
{filterProduct.length>0?
filterProduct?.map((product) => <ProductCard key={product.id} product={product} />)
:
products?.map((product) => <ProductCard key={product.id} product={product} />)
}
      </div>

    </div>
  )
}

export default Shop;
