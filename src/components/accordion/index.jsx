/** @format */
import { useState, useReducer } from "react";
import data from "./data";
import { initialState, Reducer } from '../Reducer';
import "./style.css";


// single selection Accordian




export default function Accordian() {
	const [state, dispatch] = useReducer(Reducer, initialState)
	/*const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiselection, setMultiSelection] = useState([]);*/

	function handleSingleSelection(currentID) {
		 currentID === selected ? null : currentID;
		dispatch({type: 'setSelected', payload: currentID});
	}

	function handleMultiSelection(currentID) {
		let copiedMultiple = [...multiSelection];
		const indexOfCurrentID = copiedMultiple.indexOf(currentID);

		// if currentID isn't in multiselection array, copy it. Else remove it.
		if (indexOfCurrentID === -1) {
			copiedMultiple.push(currentID);
		} else {
			copiedMultiple.splice(indexOfCurrentID, 1);
		}

	dispatch({type: 'addMultiSelection', payload: copiedMultiple})

		console.log(selected, multiSelection);
	}

	return (
		<div className="wrapper">
		{/*made the button title dynamic and user-friendly*/}
			<button
				onClick={() => dispatch({type: 'toggleMultiSelection'})}>
				{!state.enableMultiSelection ? (
					<span>Enable multiselection</span> ):
					(<span>Disable Multiselection</span>)}
			</button>
			<div className="accordian">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div className="item" key={dataItem.id}>
							<div
								className="title"
								onClick={
									state.enableMultiSelection
										? () =>
												handleMultiSelection(
													dataItem.id
												)
										: () =>
												handleSingleSelection(
													dataItem.id
												)
								}>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{state.enableMultiSelection
								? // if multiselection is enabled, then we open the answer panel only if the id has not already been clicked (handleMultiSelection() first adds or removes this id when the enableMultiSelection btn is clicked)
								  state.multiSelection.includes(dataItem.id) && (
										<div className="content">
											{dataItem.answer}
										</div>
								  )
								: // if multiselection isn't enabled, then we open the answer only if handleSingleSelection() has first added the clicked id as selected
								  state.selected === dataItem.id && (
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
