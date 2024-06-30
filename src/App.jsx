/** @format */

import "./App.css";
import Accordian from "./components/accordion";
import RandomColor from "./components/random-color-generator";
import StarRating from "./components/star-rating";

function App() {
	return (
		<div className="App">
			{/* Accordian component */}
			<Accordian />

			{/* Random Color component */}
			<RandomColor />

			{/* Star rating component */}
			<StarRating noOfStars={10} />
		</div>
	);
}

export default App;
