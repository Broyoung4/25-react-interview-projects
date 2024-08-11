/** @format */

export default function User({ user = {} }) {
	const {
		avatar_url,
		followers,
		following,
		html_url,
		public_repos,
		name,
		login,
		created_at,
	} = user;

	const createdDate = new Date(created_at);

	return (
		<div className="user">
			<div>
				<img src={avatar_url} alt="user image" className="avatar" />
			</div>
			<div className="name-container">
				<a href={html_url} target="github">
					{name || login}{" "}
				</a>
				<p>
					User joined on{" "}
					{`${createdDate.getDate()}  ${createdDate.toLocaleDateString(
						"en",
						{ month: "short" }
					)} ${createdDate.getFullYear()}`}
				</p>
			</div>
			<div>
				<div>
					<p>Public repos: {public_repos}</p>
				</div>
				<div>
					<p>Followers: {followers}</p>
				</div>
				<div>Following: {following}</div>
			</div>
		</div>
	);
}
