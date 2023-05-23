import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductCard from './components/Card'
import Sidebar from './components/SideBar'



function App() {

  return (
    <div className="App">
   <Sidebar/>
 <ProductCard/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signUp" element={<SignUp />} />
      
       </Routes> 
    </div>
  );
}

export default App
