import { Link } from "react-router-dom"
import '../style/navbar.css'
import "../style/nav.css"

function Navbar() {
  return (
    <nav className="Navbar">
      <h1 className="logo">Electronic Store</h1>
      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="products">Shop</Link></li>
        <li><Link to="seller">Seller</Link></li>
      </ul>
      <div className="side">
      <Link to="signin" className="login">
      <i className="fa-regular fa-circle-user"></i>
      </Link>
      <a href="#" className="cart">
      <i className="fa-brands fa-shopify"></i>
      </a>
      </div>
    </nav>
  )
}

export default Navbar
