import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";
import PlanetsCard from "../components/PlanetsCard.jsx";
import StarshipsCard from "../components/StarshipsCard.jsx";
import { useEffect, useState } from "react";
import { getCharacters, getPlanets, getStarships } from "../services/starwarsServices.js"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	/* const [characters, setCharacters] = useState([]) */


	useEffect(() => {

		getCharacters()
			.then((data) => dispatch({ type: "update_characters", payload: data }))

		getPlanets()
			.then((data) => dispatch({ type: "update_planets", payload: data }))

		getStarships()
			.then((data) => dispatch({ type: "update_starships", payload: data }))

	}, [])


	return (
		<div className="text-center mt-5">
			<h1>Pedro Serrano's - Star Wars Blog</h1>

			<div className="row">
				<h2 className="font-weight-light">People</h2>
				<div className="col-1"></div>
				<div className="col-10 d-flex flex-row flex-nowrap" style={{ overflowX: "auto", gap: "1rem", paddingBottom: "1rem" }}>

					{store.characters.map((item) => <PeopleCard name={item.name} id={item.uid} key={item.uid} />)}
				</div>

				<div className="col-1"></div>
			</div>

			<div className="row">
				<h2 className="font-weight-light">Planets</h2>
				<div className="col-1"></div>
				<div className="col-10 d-flex flex-row flex-nowrap" style={{ overflowX: "auto", gap: "1rem", paddingBottom: "1rem" }}>

					{store.planets.map((item) => <PlanetsCard name={item.name} id={item.uid} key={item.uid} />)}
				</div>

				<div className="col-1"></div>
			</div>

			<div className="row">
				<h2 className="font-weight-light">Starships</h2>
				<div className="col-1"></div>
				<div className="col-10 d-flex flex-row flex-nowrap" style={{ overflowX: "auto", gap: "1rem", paddingBottom: "1rem" }}>

					{store.starships.map((item) => <StarshipsCard name={item.name} id={item.uid} key={item.uid} />)}
				</div>

				<div className="col-1"></div>
			</div>


		</div>
	);
}; 