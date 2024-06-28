/** @format */
import { useState } from "react";
import data from "./data";
import "./style.css";

// single selection Accordian

export default function Accordian() {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelection, setEnableMultiSelection] = useState(false);
	const [multiselection, setMultiSelection] = useState([]);

	function handleSingleSelection(currentID) {
		currentID = currentID === selected ? null : currentID;
		setSelected(currentID);
	}

	function handleMultiSelection(currentID) {
		let copiedMultiple = [...multiselection];
		const indexOfCurrentID = copiedMultiple.indexOf(currentID);

		// if currentID isn't in multiselection array, copy it. Else remove it.
		if (indexOfCurrentID === -1) {
			copiedMultiple.push(currentID);
		} else {
			copiedMultiple.splice(indexOfCurrentID, 1);
		}

		setMultiSelection(copiedMultiple);

		console.log(selected, multiselection);
	}

	return (
		<div className="wrapper">
			<button
				onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
				Enable multiselection
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
												handleSingleSelection(
													dataItem.id
												)
								}>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{enableMultiSelection
								? // if multiselection is enabled, then we open the answer panel only if the id has not already been clicked (handleMultiSelection() first adds or removes this id when the enableMultiSelection btn is clicked)
								  multiselection.includes(dataItem.id) && (
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
