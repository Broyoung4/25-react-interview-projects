/** @format */
import { useState, useReducer } from "react";
import { FaStar } from "react-icons/fa";
import { starsInitialState, starsReducer } from '../Reducer';
import "./style.css";


export default function StarRating({ noOfStars }) {
	//initializing useReducer states
	const [state, dispatch] = useReducer(starsReducer, starsInitialState)
	const { rating, hover } = state
	

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
						onClick={() => dispatch({type: 'handlerating', payload: index})}
						onMouseMove={() => dispatch({type: 'handlehover', payload: index})}
						onMouseLeave={() => dispatch({type: 'handlehover', payload: rating})}
						size={40}
					/>
				);
			})}
		</div>
	);
}
