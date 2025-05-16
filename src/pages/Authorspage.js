import AuthorTable from "../components/Author/AuthorTable.js";
import { useState, useEffect } from "react";
import AuthorSelect from "../components/Author/AuthorSelect.js";
import axios from "../AxiosConfig.js";

function AuthorPage() {
	//Use State I use to store the authorId that user selects and change it via the <Select>
	const [selectedAuthorId, setSelectedAuthorId] = useState(0);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		fetchAuthors();
	}, []);

	const fetchAuthors = async () => {
		try {
			console.log("Fetch happening");
			const response = await axios.get("/authors");
			setAuthors(response.data);
		} catch (error) {
			console.error("Klaida gaunant autorius:", error);
		}
	};

	return (
		<>
			<AuthorSelect
				selectedAuthorId={selectedAuthorId}
				setSelectedAuthorId={setSelectedAuthorId}
				authors={authors}
			/>
			{/* Receives the AuthodId from useState as prop and based on the Id fetches the author data from database */}
			<AuthorTable authorId={selectedAuthorId} />
		</>
	);
}

export default AuthorPage;
