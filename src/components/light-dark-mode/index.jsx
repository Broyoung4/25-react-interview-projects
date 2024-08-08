/** @format */

import useLocalStorage from "./useLocalStorage";
import "./theme.css";
import { useEffect } from "react";

export default function LIghtDarkMode() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");

	function handleToggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	// whenever theme changes, we directly change the theme of the whole page using useEffect
	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<div className="light-dark-mode">
			<div className="container">
				<p>Hello world</p>
				<button onClick={handleToggleTheme}>
					{theme === "light"
						? "Switch to dark mode"
						: "Switch to light mode"}
				</button>
			</div>
		</div>
	);
}
