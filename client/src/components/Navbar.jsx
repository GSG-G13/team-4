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
      <i className="fa-regular fa-circle-user"></i>
      <i className="fa-brands fa-shopify"></i>
      </div>
    </nav>
  )
}

export default Navbar
