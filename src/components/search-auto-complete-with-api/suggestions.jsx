/** @format */

export default function Suggestions({ data, handleSuggestionClick }) {
	return (
		<ul>
			{data && data.length
				? data.map((item, index) => (
						<li key={index} onClick={handleSuggestionClick}>
							{item}
						</li>
				  ))
				: null}
		</ul>
	);
}
