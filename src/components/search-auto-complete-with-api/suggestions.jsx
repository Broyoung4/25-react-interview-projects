/** @format */

export default function Suggestions({ data, handleSuggestionClick }) {
	return (
		<ul
			style={{
				listStyle: "none",
			}}>
			{data && data.length
				? data.map((item, index) => (
						<li
							key={index}
							onClick={handleSuggestionClick}
							style={{
								cursor: "pointer",
								width: "fit-content",
							}}>
							{item}
						</li>
				  ))
				: null}
		</ul>
	);
}
