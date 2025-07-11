import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Your favorites
						</button>

						<ul className="dropdown-menu">
							<li>
								<p>Fav item</p>
								<i className="fa-solid fa-trash"></i>

							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};