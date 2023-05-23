// import { useState } from 'react'
// import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductCard from './components/Card'
import Sidebar from './components/SideBar'
import Seller from './pages/seller'
import Navbar from './components/Navbar';
import SignUp from './pages/Signup';



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
       </Routes> 

    </div>
  );
}

export default App
