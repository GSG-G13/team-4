import axios from "axios";
import { useEffect, useState } from "react";


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
  <div className="products">
  {data.map((product, i) => {
    return(
      <div className="product" key={i+1}>
  <img src={product.image} alt="img" />
  <h4>{product.title}</h4>
  </div>
    )
  })}
  </div>
)
}
export default Home;