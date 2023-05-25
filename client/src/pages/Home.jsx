import axios from "axios";
import { useEffect, useState } from "react";
import '../style/home.css'
import HeaderHome from "../components/header";


const Home=()=>{
  const [data, setData] = useState([]);
  const byHome = async () => {
    const { data } = await axios.get("/api/")
    setData([...data])
  }

  useEffect(() => {
    byHome()
  }, [])


return(
  <>
  <HeaderHome/>
  <div className="products-home">
    {/* <h2>View Products</h2> */}
    <div className="productItems">
    {data.map((product) => {
    return(
      <div className="product-home" key={product.id}>
  <img src={product.image} alt="img" />
  <h4>{product.title}</h4>
  </div>
    )
  })}
    </div>

  </div>
  </>
)
}


export default Home;