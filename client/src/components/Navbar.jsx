import { Link, useNavigate } from "react-router-dom"
import '../style/navbar.css'
import { motion } from 'framer-motion'
import axios from 'axios'


function Navbar() {
  const auth = JSON.parse(localStorage.getItem('user'))
  const token = document.cookie.split('=')[1]
  const navigate = useNavigate()

  const logout = async() => {
    const res = await axios.get('/api/logout')
    console.log(res);
    localStorage.removeItem('user')
    document.cookie = ''
    navigate('/')
  }

  return (
    <motion.nav
      className="Navbar"
      initial={{ y: '-100vw' }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="logo">AMH Store</h1>
      <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="products">Shop</Link></li>
        {auth?.admin && <li><Link to="seller">Seller</Link></li>}
      </ul>
      <div className="side">
        {token ?
          <button onClick={logout}>
            <i class="fa-solid fa-right-from-bracket"></i>
          </button> :
          <Link to="signin" className="login">
            <i className="fa-regular fa-circle-user"></i>

          </Link>
        }
        <Link to="/cart" className="cart">
          <i className="fa-brands fa-shopify"></i>
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar
