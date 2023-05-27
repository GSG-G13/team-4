
import React from 'react';
import '../style/header.css';
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const HeaderHome = () => {
  const token = document.cookie.split('=')[1]
  return (
    <div className='header'>
      {!token && <div className="sign-message">
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
          >Sign in</Link>
          : if you don't have account
        </p>

        <i class="fa-solid fa-circle-xmark"></i>
      </div>}
      <div className='videoAn'>
        <motion.video
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
        </motion.video>
      </div>
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
    </div>
  )
}
export default HeaderHome;