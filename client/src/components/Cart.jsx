import '../style/cart.css';
import Button from './Button';
const CartPage = () => {
  const cartItems = [
    { id: 1, title: 'iPhone', price: 200, count: 2, image: 'https://media.wired.com/photos/5f85fdd1033aa21518af44a8/master/w_2560%2Cc_limit/Gear-Mini-iPhone-12-Pro-Max-pacific-blue_iPhone-12-mini-white-.jpg' },
    { id: 2, title: 'iPad', price: 500, count: 1, image: 'https://media.wired.com/photos/5f85fdd1033aa21518af44a8/master/w_2560%2Cc_limit/Gear-Mini-iPhone-12-Pro-Max-pacific-blue_iPhone-12-mini-white-.jpg' },
  ];

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.count}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="total-price">Total Price: ${getTotalPrice()}</h3>
         <Button name={"Remove"}/>
        </div>
      )}
    </div>
  );
};

export default CartPage;
