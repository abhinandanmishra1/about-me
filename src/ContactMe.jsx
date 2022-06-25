import React,{useState} from 'react'
import "./contactme.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const ContactMe = () => {
  
   
  return (
    <motion.div className='contact-container'
    intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        <div className="contact">
            <li><a target="_blank" href="https://www.linkedin.com/in/abhinandanmishra1/">LinkedIn</a></li>
            <li><a target="_blank" href="https://github.com/abhinandanmishra1">Github</a></li>
            <li><a target="_blank" href="https://leetcode.com/abhinandan_mishra_1/">Leetcode</a></li>
            <li><a target="_blank" href="https://www.codechef.com/users/abhimishra1">Codechef</a></li>
            <li><a target="_blank" href="https://codeforces.com/profile/abhinandan_mishra_1">Codeforces</a></li>
        </div>
        {/* <Link to="/">Home</Link> */}
    </motion.div>
  )
}

export default ContactMe