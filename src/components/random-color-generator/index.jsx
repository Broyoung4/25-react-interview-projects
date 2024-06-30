/** @format */

import { useEffect, useState } from "react";

export default function RandomColor() {
	const [typeOFColor, setTypeOFColor] = useState("hex");
	const [color, setColor] = useState("#000000");

	// this function generates the random number to be used as index in color creation
	function getRandomInteger(length) {
		return Math.floor(Math.random() * length);
	}

	function handleCreateHEXColor() {
		const hex = [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
		];

		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[getRandomInteger(hex.length)];

			setColor(hexColor);
		}
	}

	function handleCreateRGBColor() {
		// this creates variables r,g, and b using the destructing syntax
		const [r, g, b] = [
			getRandomInteger(255),
			getRandomInteger(255),
			getRandomInteger(255),
		];

		setColor(`rgb(${r}, ${g}, ${b})`);
	}

	useEffect(() => {
		// Generate a random color when the btn to create new color type is clicked
		typeOFColor === "rgb" ? handleCreateRGBColor() : handleCreateHEXColor();
	}, [typeOFColor]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				background: color,
			}}>
			<button onClick={() => setTypeOFColor("hex")}>
				Create HEX Color
			</button>
			<button onClick={() => setTypeOFColor("rgb")}>
				Create RGB Color
			</button>
			<button
				onClick={
					typeOFColor === "hex"
						? handleCreateHEXColor
						: handleCreateRGBColor
				}>
				Generate Randmon Color
			</button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
					fontSize: "60px",
					marginTop: "50px",
					flexDirection: "column",
					gap: "20px",
				}}>
				<h3>{typeOFColor === "rgb" ? "RGB color" : "HEX color"}</h3>
				<h1
					style={{
						marginTop: 0,
					}}>
					{color}
				</h1>
			</div>
		</div>
	);
}
