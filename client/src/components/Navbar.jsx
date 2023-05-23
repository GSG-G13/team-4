function Navbar() {
  return (
    <nav className="Navbar">
      <h1 className="logo">Electronic Store</h1>
      <ul className="list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Seller</a></li>
      </ul>
      <div className="side">
      <a href="#" className="login">
      <i className="fa-regular fa-circle-user"></i>
      </a>
      <a href="#" className="cart">
      <i className="fa-brands fa-shopify"></i>
      </a>
      </div>
    </nav>
  )
}

export default Navbar
