import "./AuthorTable.css";
function AuthorTable({ authorId }) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Books</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{authorId}</td>
					</tr>
					<tr>
						<td>SomeBook2</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default AuthorTable;
