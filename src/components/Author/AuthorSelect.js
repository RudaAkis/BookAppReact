import "./AuthorSelect.css";
function AuthorSelect({ selectedAuthorId, setSelectedAuthorId, authors }) {
	const handleChange = (event) => {
		setSelectedAuthorId(Number(event.target.value)); // Convert to number if ID is numeric
	};
	return (
		<>
			<div className="selectContainer">
				<select value={selectedAuthorId} onChange={handleChange}>
					{authors.map((author) => (
						<option key={author.author_id} value={author.author_id}>
							{author.firstName + " " + author.lastName}
						</option>
					))}
				</select>
			</div>
			<button>Find books</button>
		</>
	);
}

export default AuthorSelect;
