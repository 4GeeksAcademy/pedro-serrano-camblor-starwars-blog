import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [characters, setCharacters] = useState([])

	// Local storage-------------------------------------------------
	/* const [localCharacter, setLocalCharacter] = useState([]) */

	async function getCharacters() {
		try {
			const response = await fetch('https://www.swapi.tech/api/people/');
			const data = await response.json();

			setCharacters(data.results);

			// dispatch({type, payload: data.results})

			// Local storage-------------------------------------------------------------
			/* console.log('Datos:', data.results); */
			/* localStorage.setItem("Local Characters", JSON.stringify(data.results)) */


		} catch (error) {
			console.error('Error al obtener los datos:', error);
		}
	}

	useEffect(() => {

		getCharacters()

		// Local storage-------------------------------------------------------------------
		/* 		if (localStorage.getItem("Local Characters") != null) {
		
					setCharacters(JSON.parse(localStorage.getItem("Local Characters")));
		
				} else {
					getCharacters()
				} */
		/* 
				localStorage.setItem("Local Characters", JSON.stringify(characters))
				setLocalCharacter(JSON.parse(localStorage.getItem("Local Characters")))
		
				console.log("Local Characters: ", localCharacter) */

	}, [])


	return (
		<div className="text-center mt-5">
			<h1>Pedro Serrano's - Star Wars Blog</h1>

			<div className="row">
				<h2 className="font-weight-light">Item category</h2>
				<div className="col-1"></div>
				<div className="col-10 d-flex flex-row flex-nowrap" style={{ overflowX: "auto", gap: "1rem", paddingBottom: "1rem" }}>

					{characters.map((character) => (

						<Card

							id={character.uid}
							name={character.name}

						/>

					))}
				</div>

				<div className="col-1"></div>
			</div>


		</div>
	);
}; 