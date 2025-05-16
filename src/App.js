import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorPage from "./pages/Authorspage.js";
import Layout from "./pages/Layout.js";
import BookPage from "./pages/BooksPage.js";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<BookPage />} />
					<Route path="authors" element={<AuthorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
