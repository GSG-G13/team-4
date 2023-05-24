
import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import Input from "../components/Input";
import axios from "axios";
import Sidebar from "../components/SideBar";
import { useParams, useOutletContext } from "react-router-dom";
import "../style/shop.css"

const Shop = () => {
  const props = useOutletContext();
  const [products, setProducts] = useState([])
  const [filterProduct, setFilterProduct] = useState([])
  const [filterProductTitle, setFilterProductTitle] = useState([])
  console.log(filterProductTitle);

  const getAllProducts = async () => {
    const { data } = await axios.get('/api/products')
    setProducts([...products, ...data.rows])
  }

  const filteredProductByPrice = async () => {
    const { data } = await axios.get(`/api/allProducts/${props[0]}`)
    setFilterProduct(data);
  }

  const filteredProductByTitle = async () => {
    const { data } = await axios.get(`/api/products/${props[1]}`)
    console.log(data);

    setFilterProductTitle(data);
  }


  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    filteredProductByPrice()
  }, [props])

  useEffect(() => {
    filteredProductByTitle()
  }
    , [props])


  return (

    <div className="shop">

      <div className="allProducts">

        {filterProductTitle.length > 0 ? filterProductTitle?.map((product) => <ProductCard key={product.id} product={product} />) :

          filterProduct.length > 0 ?
            filterProduct?.map((product) => <ProductCard key={product.id} product={product} />)
            :
            products?.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>

    </div>
  )
}

export default Shop;
