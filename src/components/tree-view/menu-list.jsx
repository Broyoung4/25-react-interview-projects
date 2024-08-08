/** @format */
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
	return (
		<ul className="menu-list-container">
			{list.length
				? list.map((listItem, index) => (
						<MenuItem key={index} item={listItem} />
				  ))
				: null}
		</ul>
	);
}
