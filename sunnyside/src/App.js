import Section1 from "./components/Section1";

const { default: Header } = require("./components/Header");
const { default: Showcase } = require("./components/Showcase");

function App() {
	return (
		<div className='App'>
			<Header />
			<Showcase />
			<Section1 />
		</div>
	);
}

export default App;
