import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ContactMe from "./ContactMe";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
function App() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactMe />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
