/** @format */

import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	const [searchParam, setSearchParam] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);
	const [filteredUsers, setFilteredUsers] = useState([]);

	function handleSuggestionClick(event) {
		// put the clicked suggestion as the typed in value in the input field
		setSearchParam(event.target.textContent);
		setShowDropdown(false);
		setFilteredUsers([]);
	}

	function handleInputChange(event) {
		const query = event.target.value.toLowerCase();
		setSearchParam(query);

		if (query.length > 1) {
			const filteredData =
				users && users.length
					? users.filter(
							(user) => user.toLowerCase().indexOf(query) > -1
					  )
					: [];
			setFilteredUsers(filteredData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	async function fetchListOfUsers() {
		try {
			setLoading(true);

			const response = await fetch("https://dummyjson.com/users");

			const data = await response.json();

			if (data && data.users && data.users.length) {
				setUsers(data.users.map((user) => user.firstName));
				setLoading(false);
				setError(null);
			}
		} catch (error) {
			setLoading(false);
			console.log(error);
			setError(error.message);
		}
	}

	useEffect(() => {
		fetchListOfUsers();
	}, []);

	console.log(users, filteredUsers);

	return (
		<div className="search-autocomplete-container">
			{loading ? (
				<h1
					style={{
						fontSize: "1.2rem",
					}}>
					Loading suggestions ...
				</h1>
			) : (
				<input
					type="text"
					name="search-users-input"
					placeholder="Search users here ..."
					value={searchParam}
					onChange={handleInputChange}
				/>
			)}

			{showDropdown && (
				<Suggestions
					handleSuggestionClick={handleSuggestionClick}
					data={filteredUsers}
				/>
			)}
		</div>
	);
}
