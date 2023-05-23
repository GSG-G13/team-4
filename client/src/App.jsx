import { useState } from 'react'
import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Seller from './pages/seller'



function App() {

  return (
    <div className="App">

      <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/" element={<Seller />} />
      </Routes>
    </div>
  );
}

export default App
