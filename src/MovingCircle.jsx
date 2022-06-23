import React from 'react'
import { motion } from "framer-motion"
const MovingCircle = ({skill,color}) => {
  return (
    <motion.div
    className="ball"
    style={{background: `radial-gradient(circle at 40px 40px, ${color}, #000)`}}
  >
    {skill}
    </motion.div>
  )
}

export default MovingCircle