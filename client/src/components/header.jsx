
import React, { useState } from 'react';
import '../style/header.css';
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import headerImage from '../assets/header1.png'
import headerImage2 from '../assets/phone1.png'
import headerImage3 from '../assets/watch1.png'
import headerImage4 from '../assets/laptop1.png'
import headerImage5 from '../assets/headphone1.png'
import headerImage6 from '../assets/airpod.png'
const HeaderHome = () => {
  const [show, setShow] = useState(true);
  const token = document.cookie.split('=')[1]
  const showMessage =  () => {
    setShow(false);
  }
  return (
    <div className='header'>
      {!token && <div className="sign-message" style={{ display: show ? 'block' : 'none' }}>
        <p>if you want to be able to buy and save your cart products, you need to sign in or sign up. </p>
        <p>
          <Link to='/signin'
            className="sign-in-button"
          >Sign in</Link>
          :  if you have account
        </p>
        <p>
          <Link to='/signup'
            className="sign-in-button"
          >Sign up</Link>
          : if you don't have account
        </p>

        <i onClick={showMessage} class="fa-solid fa-circle-xmark"></i>
      </div>}

      <div className="headerGreeting">
        <motion.p
          className="welcomeP"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >Discover a world of technology at our online shop. </motion.p>
        <span><motion.p
          className="parag"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >Find the latest phones, laptops, and electronic devices to elevate your digital experience. Shop now and unlock the future of innovation!</motion.p></span>
        <Link to='/products' className='headBtn' > Shop Now </Link>
      </div>
      <div className='videoAn'>

        <img className='headerImage' src={headerImage} alt="" />
        <motion.img
          initial={{ x: 300,  opacity: 0, y:100 }}
          animate={{ x: 0,  opacity: 1, y:0 }}
          transition={{ duration: 1, delay: 0.5 }}
         className='headerImage2'
          src={headerImage2} alt="" />
        <motion.img
             initial={{ x: 300,  opacity: 0, y:10 }}
             animate={{ x: 0,  opacity: 1, y:0 }}
             transition={{ duration: 1, delay: 0.5 }}
         className='headerImage3' src={headerImage3} alt="" />
        <motion.img
             initial={{   opacity: 0, y: -300 }}
             animate={{  opacity: 1, y:0 }}
             transition={{ duration: 1, delay: 0.5 }}
         className='headerImage4' src={headerImage4} alt="" />
        <motion.img
             initial={{x: -300,   opacity: 0, y: 100 }}
             animate={{ x: 0,  opacity: 1, y:0 }}
             transition={{ duration: 1, delay: 0.5 }}
         className='headerImage5' src={headerImage5} alt="" />
        <motion.img
             initial={{ x: -300,  opacity: 0, y: -300 }}
             animate={{ x: 0, opacity: 1, y:0 }}
             transition={{ duration: 1, delay: 0.5 }}
         className='headerImage6' src={headerImage6} alt="" />
        {/* <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          aria-labelledby="transcript-5306451725778944"
          muted
          playsInline
          className="video-hero-animation__video"
          src="https://kstatic.googleusercontent.com/files/5a8b6be5b0cc7db5f81176189c3be5f719f13139229206c0f446e2f38a2cb6370d39473f7fcc62d617cdd5a94a0973325427fcfadf65bd110a905d9d67dab872"
          preload="true"
          autoPlay
        >
        </motion.video> */}
      </div>
    </div>
  )
}
export default HeaderHome;