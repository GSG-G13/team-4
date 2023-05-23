
import './App.css'
import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductCard from './components/Card'
import Sidebar from './components/SideBar'
import Seller from './pages/seller'

import HeaderHome from './components/header'
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage'
import Details from './components/Details';
import SignIn from './pages/Signin';
import Shop from './pages/Shop';



function App() {

  return (
    <div className="App">

      {/* <HeaderHome/> */}
   {/* <Sidebar/>
=======
=======
>>>>>>> main
      <Navbar />
   <Sidebar/>
 <ProductCard/>
  <Route path="/cart" element={<CartPage />} />
*/}
  <Routes>
  {/* <Route path="/" element={<Home />} /> */}
  {/* <Route path="/signIn" element={<SignIn />} /> */}
  {/* <Route path="/signUp" element={<SignUp />} /> */}
  {/* <Route path="/seller" element={<Seller />} /> */}
  <Route path="/cart" element={<CartPage />} />
   </Routes>  
    </div>
  );
}

export default App
