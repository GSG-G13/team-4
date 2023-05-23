// import { useState } from 'react'
// import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home'
// import Navbar from './components/Navbar'
import Seller from './pages/seller'
import Navbar from './components/Navbar';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} /> */}
        <Route path="/" element={<Seller />} />
      </Routes>
    </div>
  );
}

export default App
