/** @format */

import { useState } from "react";

export default function TabsSwitcher({ tabsContent = [], onChange }) {
	const [currentTabIndex, setCurrentTabIndex] = useState(0);

	function handleOnclick(currentIndex) {
		setCurrentTabIndex(currentIndex);
		onChange(currentIndex); // trigger the parent component's onChange function with the current index
	}

	return (
		<div className="wrapper">
			<div className="heading">
				{tabsContent.map((tabItem, index) => (
					<div
						className={`tab-item ${
							currentTabIndex === index ? "active" : ""
						}`}
						onClick={() => {
							handleOnclick(index);
						}}
						key={tabItem.label}>
						<span className="label">{tabItem.label}</span>
					</div>
				))}
			</div>
			<div className="content">
				{
					// if tabsContent at that current index exists, then the content at that index is returned

					tabsContent[currentTabIndex] &&
						tabsContent[currentTabIndex].content
				}
			</div>
		</div>
	);
}
