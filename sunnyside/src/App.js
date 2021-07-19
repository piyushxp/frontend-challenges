import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const { default: Header } = require("./components/Header");
const { default: Showcase } = require("./components/Showcase");

function App() {
	return (
		<div className='App'>
			<Header />
			<Showcase />
			<Section1 />
			<Section2 />
		</div>
	);
}

export default App;
