import "../style/card.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const ProductCard = ({ product }) => {
  return (
    <motion.div
     className="products-container"
     initial={{ x: 200,opacity:0 }}
     animate={{ x: 0, opacity:1 }}
     transition={{ duration: 0.5 }}
     >
      <div key={product.id} className="product-card">
        <div className="product-image">
          <img src={product.image} />
        </div>
        <div className="product-title">
          <Link to={`/product/` + product.id}>
            <h2>{product.title}</h2>
          </Link>
        </div>

        <div className="product-price">
          <p>price : ${product.price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
