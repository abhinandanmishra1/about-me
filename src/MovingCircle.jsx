import React from 'react'
import { motion } from "framer-motion"
const MovingCircle = ({skill,color}) => {
  return (
    <motion.div
    drag
    dragConstraints={{
      top: -100,
      left: -100,
      right: 100,
      bottom: 100,
    }}
    className="ball"
  >
    {skill}
    </motion.div>
  )
}

export default MovingCircle