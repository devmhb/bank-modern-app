import React from "react";
import {motion} from "framer-motion"

const variant = {
  hover: {
      scale:1.2
  },
  tap: {
    scale:1,

  }
}

const Button = ({ styles }) => (
  <motion.button 
  variants={variant}
  whileHover="hover"
  whileTap="tap"
  type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </motion.button>
);

export default Button;