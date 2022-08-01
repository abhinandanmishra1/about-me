import React from 'react'
import { Link } from "react-router-dom";
import profile from "./assets/images/prof1.jpg";
import MovingCircle from "./MovingCircle";
import { motion } from 'framer-motion';
const Home = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Angular"];
	const skillColor = ["#FF5733", "#48C9B0", "#A04000", "#F1C40F", "#283747"];
	return (
		<motion.div className="container"
        intial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
			<div className="skills">
				{skills.map((skill, i) => {
					return (
						<MovingCircle skill={skill} color={skillColor[i]} isDrag={true} />
					);
				})}
			</div>
			<div className="about-me">
				{/* Pic */}
				<div className="pic">
					<img src={profile} alt="" />
				</div>
				{/* Name and Designation */}
				<div className="designation">
					<h2>Abhinandan Mishra</h2>
					<h3>Web Developer</h3>
				</div>
				{/* Contact */}
				<div className="contact-me">
					<div className="button">
						<Link to="/contact">More About Me</Link>
					</div>
				</div>
				{/* About Me */}
				<div className="about">
					<p>
						I am a web developer and software developer currently working as a
						SDE intern at Scaler Academy (Interviewbit).
					</p>
					<p>
						I like to do web development and create beautiful designs using css.
					</p>
				</div>
				{/* Work */}
				<div className="work">
					<p>Work</p>
					<h6>Scaler Academy</h6>
				</div>
			</div>
		</motion.div>
	);
}

export default Home