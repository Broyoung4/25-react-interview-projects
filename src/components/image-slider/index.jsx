/** @format */

import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
	// declare states
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchImages() {
		try {
			setLoading(true);

			const response = await fetch(`${url}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				// images are done loading
				setLoading(false);
			}
		} catch (error) {
			setErrorMsg(error.message);
			// when an error occurs, the loading stops
			setLoading(false);
		}
	}

	function handleLoading() {
		if (loading) {
			return <div>Loading data! Please wait.</div>;
		}

		// if an error occur when loading images with new url
		if (errorMsg) {
			return <div>Error occured! {errorMsg}</div>;
		}
	}

	function handlePrevious() {
		// currentSlide's value alternates between 0 and (images.length - 1) * -1. Where 0  for first image slide and (images.length - 1) * -1 for last image slide.
		setCurrentSlide(
			currentSlide === 0
				? // go to the last image slide if prevBtn was clicked at the first image slide
				  (images.length - 1) * -1
				: // shows the previous image by causing the translateX property to increase by 100%
				  currentSlide + 1
		);
	}

	function handleNext() {
		// currentSlide's value alternates between 0 and (images.length - 1) * -1. Where 0  for first image slide and (images.length - 1) * -1 for last image slide.
		setCurrentSlide(
			currentSlide === (images.length - 1) * -1
				? // go to the first image slide if nextBtn was clicked at the last image slide
				  0
				: // shows the Next image by causing the translateX property to decrease by 100%
				  currentSlide - 1
		);
	}

	// we use the useEffect hook to run a function that checks whether our url is valid anytime the url changes
	useEffect(() => {
		if (url !== "") {
			fetchImages();
		}
	}, [url]);

	handleLoading();

	return (
		<div className="container">
			<BsArrowLeftCircleFill
				onClick={handlePrevious}
				className="arrow arrow-left"
			/>
			{images && images.length
				? images.map((imageItem, index) => (
						<img
							key={imageItem.id}
							src={imageItem.download_url}
							alt={imageItem.download_url}
							className={
								currentSlide === index
									? "current-image image"
									: "hidden-image image"
							}
							style={{
								// the images has to be shifted so that the on at currentSlide is visible
								transform: `translateX(${
									(currentSlide + index) * 100
								}%)`,
							}}
						/>
				  ))
				: null}
			<BsArrowRightCircleFill
				onClick={handleNext}
				className="arrow arrow-right"
			/>
			<span className="circle-indicators">
				{images && images.length
					? images.map((image, index) => (
							<button
								onClick={() =>
									// currentSlide alternates between 0 and (image.length - 1) * -1
									setCurrentSlide(index * -1)
								}
								key={index}
								className={
									// currentSlide is always -1 * index of the visible image, so here we multiply by -1 again to convert back to positive
									currentSlide * -1 === index
										? "current-indicator"
										: "inactive-indicator"
								}></button>
					  ))
					: null}
			</span>
		</div>
	);
}
