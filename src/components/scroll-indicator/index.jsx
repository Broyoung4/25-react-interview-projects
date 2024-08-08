/** @format */

import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
	const [data, setData] = useState([]);
	const [dataLoading, setDataLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [scrollPercentage, setScrollPercentage] = useState(0);

	async function fetchData(dataUrl) {
		try {
			setDataLoading(true);

			const response = await fetch(dataUrl);
			const data = await response.json();

			if (data.products && data.products.length) {
				setData(data.products);
				setDataLoading(false);
				setErrorMessage("");
			}
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	function handleScrollPercentage() {
		const scrolledHeight = document.documentElement.scrollTop;

		const maxScrollHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercentage((scrolledHeight / maxScrollHeight) * 100);
	}

	// load new data anytime the url changes
	useEffect(() => {
		fetchData(url);
	}, [url]);

	// use useEffect to calculate the scrollPercentage
	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage);

		// return a cleanup function that removes the scroll event listener when the component is unmounted
		return () => {
			window.removeEventListener("scroll", handleScrollPercentage);
		};
	}, []);

	if (dataLoading) {
		return <div>Loading data! Please wait.</div>;
	}

	if (errorMessage) {
		return <div>Error! {errorMessage}</div>;
	}

	return (
		<div>
			<div className="top-container">
				<h1>Custom Scroll Indicator</h1>
				<div className="scroll-progress-container">
					<div
						className="current-progress-bar"
						style={{
							width: `${scrollPercentage}%`,
						}}></div>
				</div>
			</div>

			<div className="data-container">
				{data && data.length
					? data.map((dataItem, index) => (
							<p key={index}>{dataItem.title}</p>
					  ))
					: null}
			</div>
		</div>
	);
}
