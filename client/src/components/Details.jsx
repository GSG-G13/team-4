import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/details.css';
import '../style/seller.css';
import { motion } from "framer-motion"

function Details({ product }) {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const token = document.cookie.split('=')[[1]];


  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems(response.data.rows);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async () => {
    const existingItem = cartItems.find((item) => item.product_id === product.id);
    if (existingItem) {
      setShowMessage(true);
      return;
    }

    try {
      await axios.post(`/api/cart/${product.id}`);
      fetchCartItems();
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <motion.div
      className="details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="card_image">
        <img src={product.image} alt="product" />
      </div>

      <div className="card_content">
        <div className="card_title">
          <h1><span>product name: </span>{product.title}</h1>
          <h2><span>price :</span> $ {product.price}</h2>
        </div>

        <div className="card_description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
        <div className="card_btn">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: 'rgba(16, 147, 244, 0.3)',
              color: "#fff",
              borderRadius: "10px",
            }}

            transition={{ duration: 0.5 }}
            onClick={token && addToCart}
          >Add to cart</motion.button>
        </div>

        {showMessage && (
          <p style={{ color: 'red' }}>This product is already in your cart. Quantity cannot be edited.</p>
        )}
      </div>
    </motion.div>
  );
}

export default Details;
