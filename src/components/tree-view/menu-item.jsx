/** @format */

import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

// the MenuItem component displays a single menu item and its nested children
// this is the major component for this treeview project
export default function MenuItem({ item = {} }) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

	function handleToggleChildren(currentLabel) {
		setDisplayCurrentChildren((prevState) => {
			const newState = {
				// spread operator to keep all previous state properties
				...prevState,
				// the square brackets allows to add the property name dynamically
				[currentLabel]: !prevState[currentLabel],
			};

			return newState;
		});
	}

	return (
		<li>
			<div className="menu-item">
				<p>{item.label}</p>
				{
					// if the item has a nested menu, show the expand/collapse icon
					item.children && item.children.length ? (
						<span
							onClick={() => {
								handleToggleChildren(item.label);
							}}>
							{displayCurrentChildren[item.label] ? (
								// show expand icon
								<FaMinus color="white" size={25} />
							) : (
								// show collapse icon
								<FaPlus color="white" size={25} />
							)}
						</span>
					) : null
				}
			</div>

			{
				// if the item has a nested menu and if the item's children is not displayed, we call the MenuList component and recursively implement the same logic
				item.children &&
				item.children.length &&
				displayCurrentChildren[item.label] ? (
					<MenuList list={item.children} />
				) : null
			}
		</li>
	);
}
