/** @format */
import { useReducer } from "react";
import data from "./data";
import { accordInitialState, accordReducer } from "../Reducer";
import "./style.css";

// single selection Accordian

export default function Accordian() {
	//Reducer hook to handle all states for concise code
	const [state, dispatch] = useReducer(accordReducer, accordInitialState);
	const { multiSelection, enableMultiSelection, selected } = state;

	function handleMultiSelection(currentID) {
		let copiedMultiple = [...multiSelection];
		const indexOfCurrentID = copiedMultiple.indexOf(currentID);

		//if currentID isn't in multiselection array, copy it. Else remove it.
		if (indexOfCurrentID === -1) {
			copiedMultiple.push(currentID);
		} else {
			copiedMultiple.splice(indexOfCurrentID, 1);
		}

		dispatch({ type: "addMultiSelection", payload: copiedMultiple });
	}

	return (
		<div className="wrapper">
			{/*made the button title dynamic and user-friendly*/}
			<button onClick={() => dispatch({ type: "toggleMultiSelection" })}>
				{!enableMultiSelection ? (
					<span>Enable multiselection</span>
				) : (
					<span>Disable Multiselection</span>
				)}
			</button>
			<div className="accordian">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div className="item" key={dataItem.id}>
							<div
								className="title"
								onClick={
									enableMultiSelection
										? () =>
												handleMultiSelection(
													dataItem.id
												)
										: () =>
												//dispatch to handle single selections
												dispatch({
													type: "setSelected",
													payload: dataItem.id,
												})
								}>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{enableMultiSelection
								? // if multiselection is enabled, then we open the answer panel only if the id has not already been clicked (handleMultiSelection() first adds or removes this id when the enableMultiSelection btn is clicked)
								  multiSelection.includes(dataItem.id) && (
										<div className="content">
											{dataItem.answer}
										</div>
								  )
								: // if multiselection isn't enabled, then we open the answer only if handleSingleSelection() has first added the clicked id as selected
								  selected === dataItem.id && (
										<div className="content">
											{dataItem.answer}
										</div>
								  )}
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
}
