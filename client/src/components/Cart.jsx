import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/cart.css';
import Button from './Button';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get('/api/cart');
      setCartItems([...cartItems, ...response.data.rows]);
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`/api/deletecart/${productId}`);
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.product_id !== productId));
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  };

  return (
    <>

      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <span className="cart">
          <span className="productbar">
            <ul className="grid-container">
              <li>Products</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Remove from cart</li>
            </ul>
          </span>
          <span className="product">
            {cartItems.map((item,i) => (

              <ul key={i+1} className="grid-container cart-item">
                <li className="item-image">
                  <div>
                    <img src={item.image} alt={item.title} className="ProductImage" />
                    <p>{item.title}</p>
                  </div>
                </li>
                <li>${item.price}</li>
                <li>{item.count}</li>
                <li><button onClick={() => handleRemoveFromCart(item.product_id)}>Remove</button>
                </li>
              </ul>
            ))}
            <h3 className="total-price">Total Price: ${getTotalPrice()}</h3>
            <Button name={"Remove"} />
          </span>
        </span>
      )}
    </>
  );
};

export default CartPage;
