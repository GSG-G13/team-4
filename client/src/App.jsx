
import './App.css'
import SignUp from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ProductCard from './components/Card'
import Sidebar from './components/SideBar'
import Seller from './pages/seller'
<<<<<<< HEAD
import HeaderHome from './components/header'

=======
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage'
import SignIn from './pages/Signin';
>>>>>>> main


function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <HeaderHome/>
   {/* <Sidebar/>
=======
      <Navbar />
   <Sidebar/>
>>>>>>> main
 <ProductCard/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signIn" element={<SignIn />} />
       <Route path="/signUp" element={<SignUp />} />
       <Route path="/seller" element={<Seller />} />
<<<<<<< HEAD
       </Routes>  */}
=======
       <Route path="/cart" element={<CartPage />} />

       </Routes> 
>>>>>>> main

    </div>
  );
}

export default App
