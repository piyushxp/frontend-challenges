import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Showcase from "./components/Showcase";
import Header from "./components/Header";
import Designed from "./components/Designed";
import Free from "./components/Free";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<Showcase />
			<Designed />
			<Free />
			<Footer />
		</div>
	);
}

export default App;
