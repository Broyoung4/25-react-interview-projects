/** @format */

import TabsSwitcher from "./tabs";
import "./tabs.css";

function RandomComponent() {
	return <h1>Some random component</h1>;
}

export default function TabParent() {
	const tabs = [
		{
			label: "Tab 1",
			content: (
				<div>
					This is content for Tab <span className="num">1</span>
				</div>
			),
		},
		{
			label: "Tab 2",
			content: (
				<div>
					This is content for Tab <span className="num">2</span>
				</div>
			),
		},
		{
			label: "Tab 3",
			content: <RandomComponent />,
		},
	];

	function handleChange(currentTabIndex) {
		console.log(currentTabIndex);
	}

	return <TabsSwitcher tabsContent={tabs} onChange={handleChange} />;
}
