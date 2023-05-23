import { useState } from 'react'
import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
<<<<<<< HEAD
import Navbar from './components/Navbar'
=======
import Seller from './pages/seller'
>>>>>>> d147bdc8d4bd723c8211b07b69a41c0175153e7a



function App() {

  return (
    <div className="App">
<<<<<<< HEAD
    <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
=======

      <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/" element={<Seller />} />
>>>>>>> d147bdc8d4bd723c8211b07b69a41c0175153e7a
      </Routes>
    </div>
  );
}

export default App
