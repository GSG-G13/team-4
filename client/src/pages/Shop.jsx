

// import React, { useEffect, useState } from "react";
// import ProductCard from "../components/Card";
// import axios from "axios";

// const Shop=()=>{
//   const [min, setMin] = useState(0)
// 	const [max, setMax] = useState(0)

//   const [products, setProducts]=useState([])

//   const getAllProducts= async()=> {
// const {data}=await axios.get('http://localhost:9000/products')
// // console.log(data.rows);
// setProducts([...products,...data.rows])
//   }

//   // const filterPrice=async ()=>{
//     products.filter(product => product.price >= min && product.price <= max )

//   // }
//   // console.log(filterPrice);
//   useEffect(()=>{
// getAllProducts()
//   }, [])

//   return(
//     <>
//     <div className="allProducts">
//     {products.map((product)=><ProductCard product={product}/>)}

//     </div>
//     <div className="priceFilter">
//       <h3>Price</h3>
//     <div>
// 							<input type="range" id="min" name="cowbell"
// 								min={0} max={9} step={0.25}
// 								onChange={(e) => setMin(e.target.value)} />
// 							<label>Min {min}</label>
// 						</div>
// 						<div>
// 							<input type="range" id="max" name="cowbell"
// 								min={0} max={9} step={0.25}
// 								onChange={(e) => setMax(e.target.value)} />
// 							<label>Max {max}</label>
// 						</div>
//     </div>
//     </>
//   )
// }

// export default Shop;
import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import axios from "axios";

const Shop = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const { data } = await axios.get("http://localhost:9000/products");
    setProducts([...products, ...data.rows]);
  };

  const filterProductsByPrice = () => {
    return products.filter(
      (product) => product.price >= min && product.price <= max
    );
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts = filterProductsByPrice();

  return (
    <>
      <div className="priceFilter">
        <h3>Price</h3>
        <div>
          <input
            type="range"
            id="min"
            name="cowbell"
            min={0}
            max={9}
            step={0.25}
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <label>Min {min}</label>
        </div>
        <div>
          <input
            type="range"
            id="max"
            name="cowbell"
            min={0}
            max={9}
            step={0.25}
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <label>Max {max}</label>
        </div>
      </div>
      <div className="allProducts">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
