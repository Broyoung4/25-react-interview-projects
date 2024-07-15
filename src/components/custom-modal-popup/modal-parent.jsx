/** @format */

import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalParent() {
	const [isModalPopedUp, setIsModalPopedUp] = useState(false);

	function handleToggleModalPopup() {
		setIsModalPopedUp(!isModalPopedUp);
	}

	function handleOnClose() {
		setIsModalPopedUp(false);
	}

	return (
		<div>
			<button onClick={handleToggleModalPopup}>Open Modal Popup</button>
			{isModalPopedUp && (
				<Modal
					header={<h1>Customised Header</h1>}
					footer={<h1>Customised Footer</h1>}
					onClose={handleOnClose}
					body={<div>Customised Body</div>}
				/>
			)}
		</div>
	);
}
