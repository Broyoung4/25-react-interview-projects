/** @format */

import "./App.css";
import Accordian from "./components/accordion";
import ImageSlider from "./components/image-slider";
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

			{/* Image Slider component */}
			<ImageSlider
				url={"https://picsum.photos/v2/list"}
				limit={10}
				page={1}
			/>
			
			
		</div>
	);
}

export default App;
