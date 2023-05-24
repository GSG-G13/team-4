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
      setCartItems(response.data.rows);
    } catch (error) {
      console.error('Error fetching cart products:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`/api/deletecart/${productId}`);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.product_id !== productId)
      );
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await axios.put(`/api/updateQuantity/${productId}`, { quantity });
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.product_id === productId) {
            return { ...item, count: quantity }; 
          }
          return item;
        })
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
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
        <div className="cart">
          <div className="productbar">
            <ul className="grid-container">
              <li>Products</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Remove from cart</li>
            </ul>
          </div>
          <div className="product">
            {cartItems.map((item) => (
              <ul key={item.product_id} className="grid-container cart-item">
                <li className="item-image">
                  <div>
                    <img src={item.image} alt={item.title} className="ProductImage" />
                    <p>{item.title}</p>
                  </div>
                </li>
                <li>${item.price}</li>
                <li>
                  <input
                    type="number"
                    min="1"
                    value={item.count}
                    onChange={(e) => handleUpdateQuantity(item.product_id, e.target.value)}
                  />
                </li>
                <li>
                  <Button onClick={() => handleRemoveFromCart(item.product_id)} name="Remove" />
                </li>
              </ul>
            ))}
            <h3 className="total-price">Total Price: ${getTotalPrice()}</h3>
            <Button name="Remove" />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
