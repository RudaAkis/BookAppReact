import "./AuthorTable.css";
import axios from '../../AxiosConfig'
import { useState, useEffect } from "react";
function AuthorTable({ authorId }) {

	const [authorBooks, setAuthorBooks] = useState([]);

	useEffect(() => {
		fetchAuthors();
	}, [authorId]);

	const fetchAuthors = async () => {
		try {
			console.log("Fetch for books is happening");
			const response = await axios.get("/books/author/"+authorId);
			setAuthorBooks(response.data);
		} catch (error) {
			console.error("Klaida gaunant authoriaus knygas:", error);
		}
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Year</th>
					</tr>
				</thead>
				<tbody>
					{ authorBooks.map( (authorBook) => (
						<tr key={authorBook.id}>
							<td>{authorBook.title}</td>
							<td>{authorBook.year}</td>
						</tr>
					) ) }
				</tbody>
			</table>
		</>
	);
}

export default AuthorTable;
