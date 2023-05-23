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

  console.log(cartItems);
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
              <li>Total</li>
            </ul>
          </span>
          <span className="product">
            {cartItems.map((item) => (
              <ul key={item.id} className="grid-container cart-item">
                <li className="item-image">
                  <div>
                    <img src={item.image} alt={item.title} className="ProductImage" />
                    <p>{item.title}</p>
                  </div>
                </li>
                <li>${item.price}</li>
                <li>{item.count}</li>
                <li>${item.price * item.count}</li>
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
