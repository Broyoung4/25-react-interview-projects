/** @format */

import "./App.css";
import ModalParent from "./components/custom-modal-popup/modal-parent";
// import TabParent from "./components/custom-tabs/tab-parent";
// import LIghtDarkMode from "./components/light-dark-mode";
// import ScrollIndicator from "./components/scroll-indicator";
// import QRCodeGenerator from "./components/qr-code-generator";
// import TreeView from "./components/tree-view";
// import { default as treeViewMenu } from "./components/tree-view/data";
// import Accordian from "./components/accordion";
// import ImageSlider from "./components/image-slider";
// import RandomColor from "./components/random-color-generator";
// import StarRating from "./components/star-rating";
// import LoadMoreData from "./components/load-more-data";

export default function App() {
	return (
		<div className="App">
			{/* Accordian component */}
			{/* <Accordian /> */}

			{/* Random Color component */}
			{/* <RandomColor /> */}

			{/* Star rating component */}
			{/* <StarRating noOfStars={10} /> */}

			{/* Image Slider component */}
			{/* <ImageSlider
				url={"https://picsum.photos/v2/list"}
				limit={10}
				page={1}
			/> */}

			{/* load more products component */}
			{/* <LoadMoreData /> */}

			{/* Tree view component */}
			{/* <TreeView menus={treeViewMenu} /> */}

			{/* QR Code Generator */}
			{/* <QRCodeGenerator /> */}

			{/* Light and dark theme switch */}
			{/* <LIghtDarkMode />
			 */}

			{/* scroll indicator */}
			{/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

			{/* Tab Switcher Component */}
			{/* <TabParent /> */}

			{/* Custom Modal component */}
			<ModalParent />
		</div>
	);
}
