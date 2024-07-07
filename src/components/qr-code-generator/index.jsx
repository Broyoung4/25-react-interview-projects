/** @format */

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
	const [qrCode, setQRCode] = useState("");
	const [input, setInput] = useState("");

	function handleGenerateQRCode() {
		setQRCode(input);
		// clear previous input value
		setInput("");
	}

	return (
		<div>
			<h1>QR Code Generator</h1>
			<div>
				<input
					onChange={(event) => {
						setInput(event.target.value);
					}}
					value={input}
					type="text"
					placeholder="Enter your text here"
				/>
				<button
					disabled={
						// if input is empty, then qrcode cannot be generated, so disable the btn
						input.trim() === "" ? true : false
					}
					onClick={handleGenerateQRCode}>
					Generate
				</button>
			</div>
			<div>
				<QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
			</div>
		</div>
	);
}
