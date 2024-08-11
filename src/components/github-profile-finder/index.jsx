/** @format */

import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

export default function GitHubUserSearch() {
	const [userName, setUserName] = useState("onyedikachi23");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);

	function handleSubmit() {
		fetchGitHubUserData();
	}

	async function fetchGitHubUserData() {
		try {
			setLoading(true);

			const githubAPIDetails = {
				url: "https://api.github.com/users/",
			};

			const response = await fetch(`${githubAPIDetails.url}${userName}`);

			const data = await response.json();

			if (data) {
				setUserData(data);
				setLoading(false);
				setUserName("");
			}

			console.log(data);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchGitHubUserData();
	}, []);

	if (loading) {
		return <h1>Loading data ! Please wait.</h1>;
	}

	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					type="text"
					name="username"
					placeholder="Search GitHub Username..."
					value={userName}
					onChange={(event) => setUserName(event.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{userData ? <User user={userData} /> : null}
		</div>
	);
}
