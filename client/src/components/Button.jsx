import { motion } from 'framer-motion'

const Button = ({ name }) => {

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        backgroundColor: '#f3b60e',
        color: 'white',
        borderRadius: '10px',
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}

    >{name}</motion.button>
  )
}

export default Button
