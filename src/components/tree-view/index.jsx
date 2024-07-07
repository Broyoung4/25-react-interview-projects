/** @format */
import MenuList from "./menu-list";
import "./style.css";

export default function TreeView({ menus = [] }) {
	/* 
    This component is broken down into 3 components for easy understanding and implementation.
    The index.js accepts the MenuList as a child component and the MenuList accepts the MenuItem as a child component
    */
	return (
		<div className="tree-view-container">
			<MenuList list={menus} />
		</div>
	);
}
