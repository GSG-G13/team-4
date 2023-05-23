<<<<<<< HEAD
// import { useState } from 'react'
// import SignUp from './pages/Signup'
=======

import './App.css'
import SignUp from './pages/Signup'
>>>>>>> 7458f393a074ff4a7f87ee1f80f11fca57559377
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductCard from './components/Card'
import Sidebar from './components/SideBar'
import Seller from './pages/seller'
<<<<<<< HEAD
import SignUp from './pages/Signup';
import Navbar from './components/Navbar';

=======
import CartPage from './pages/CartPage'
>>>>>>> 7458f393a074ff4a7f87ee1f80f11fca57559377


function App() {

  return (
    <div className="App">
      <Navbar />
   <Sidebar/>
 <ProductCard/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signUp" element={<SignUp />} />
       <Route path="/seller" element={<Seller />} />
       <Route path="/cart" element={<CartPage />} />

       </Routes> 

    </div>
  );
}

export default App
