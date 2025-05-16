import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
	return (
		<>
			<nav className="header">
				<ul className="headerList">
					<li className="headerItem">
						<Link className="navLink" to="/">
							Books
						</Link>
					</li>
					<li className="headerItem">
						<Link className="navLink" to="/authors">
							Authors
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
