import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Showcase from "./components/Showcase";
import Header from "./components/Header";
import Designed from "./components/Designed";

function App() {
	return (
		<div>
			<Header />
			<Showcase />
			<Designed />
		</div>
	);
}

export default App;
