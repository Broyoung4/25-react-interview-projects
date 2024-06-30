/** @format */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars }) {
	const [rating, setRating] = useState(0);

	const [hover, setHover] = useState(0);

	function handleClick(currentIndex) {
		setRating(currentIndex);
	}

	function handleMouseMove(currentIndex) {
		setHover(currentIndex);
	}

	function handleMouseLeave() {
		// When the mouse leaves, the hovered elements should return be the elements that have been rated (by onClick)
		setHover(rating);
	}

	return (
		<div
			style={{
				marginTop: "2rem",
			}}
			className="star-rating">
			{[...Array(noOfStars)].map((star, index) => {
				// index is zero based, but we need it starting from 1 (noOfStars)
				index += 1;

				return (
					<FaStar
						className={
							index <= (hover || rating) ? "active" : "inactive"
						}
						key={index}
						onClick={() => handleClick(index)}
						onMouseMove={() => handleMouseMove(index)}
						onMouseLeave={() => handleMouseLeave()}
						size={40}
					/>
				);
			})}
		</div>
	);
}
