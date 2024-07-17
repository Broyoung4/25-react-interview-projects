/** @format */

import { useEffect, useRef, useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalParent() {
	const [isModalPopedUp, setIsModalPopedUp] = useState(false);
	// create modalRef for handling outside modal click events
	const modalRef = useRef(null);

	function handleToggleModalPopup() {
		setIsModalPopedUp((prevState) => !prevState);
	}

	function handleOnClose() {
		setIsModalPopedUp(false);
	}

	function handleClickOutside(event) {
		if (modalRef.current && !modalRef.current.contains(event.target))
			handleOnClose();
	}

	// create a useEffect for handling outside modal click events
	useEffect(() => {
		if (isModalPopedUp) {
			window.addEventListener("click", (event) => {
				handleClickOutside(event);
			});
		} else {
			// Remove the event listener when modal is closed
			window.removeEventListener("click", handleClickOutside);
		}

		// Cleanup: Remove the event listener when component unmounts
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [isModalPopedUp]);

	return (
		<div>
			<button
				onClick={(event) => {
					event.stopPropagation();
					// toggle modal popup state
					handleToggleModalPopup();
				}}>
				Open Modal Popup
			</button>
			{isModalPopedUp && (
				<Modal
					header={<h1>Customised Header</h1>}
					footer={<h1>Customised Footer</h1>}
					onClose={handleOnClose}
					body={<div>Customised Body</div>}
					modalRef={modalRef}
				/>
			)}
		</div>
	);
}
