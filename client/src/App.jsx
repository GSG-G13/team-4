
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
import ProductDetails from './pages/ProductDetails';



function App() {

  return (
    <div className="App">

      {/* <HeaderHome/> */}
   {/* <Sidebar/>
   <Sidebar/>
 <ProductCard/>
  */}

<Navbar />
       <Routes>
     
       
       <Route path="/" element={<Home />} />
       <Route path="/signin" element={<SignIn />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/products" element={<Shop />} />
       <Route path="/seller" element={<Seller />} />
       <Route path="/cart" element={<CartPage />} /> 

       {/* <Route path="/product/:id" element={<Details />} /> */}


       </Routes> 


    </div>
  );
}

export default App
