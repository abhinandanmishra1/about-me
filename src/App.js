import "./App.css";
import profile from "./assets/images/prof1.jpg";
import MovingCircle from "./MovingCircle";

function App() {
	const skills = ["HTML", "CSS", "JavaScript", "React", "Angular"];
	const skillColor = ["#FF5733", "#48C9B0", "#A04000", "#F1C40F", "#283747"];
	return (
		<div className="container">
			<div className="skills">
				{skills.map((skill, i) => {
					return <MovingCircle skill={skill} color={skillColor[i]} />;
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
				<div className="contact">
					<div className="button">Contact Me</div>
				</div>
				{/* About Me */}
				<div className="about">
					<p>
						I am a web developer and software developer currently working as an
						SDE intern at Scaler Academy (Interviewbit).
					</p>
					<p>
						I like to do web development and create beautiful designs using css.
					</p>
					<p>I am open to freelance or part-time work in web development.</p>
				</div>

				{/* Work */}
				<div className="work">
					<p>Work</p>
					<h6>Scaler Academy</h6>
				</div>

				<div className="skills">
					{skills.map((skill, i) => {
						return <MovingCircle skill={skill} color={skillColor[i]} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
