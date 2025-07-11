import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink, useParams } from "react-router-dom";
import { getPlanetDetails } from "../services/starwarsServices.js";
import { useEffect } from "react";


export const PlanetsDetails = () => {

    let { id } = useParams()

    const { store, dispatch } = useGlobalReducer()

    console.log(id);

    useEffect(() => {

        getPlanetDetails(id)
            .then((data) => dispatch({ type: "update_planetDetails", payload: data }))

    }, [])

    const planetDetailsContainer = store.planetDetails.properties
    console.log(planetDetailsContainer);


    return (
        <div className="container text-center mt-5">
            {planetDetailsContainer ? (
                <>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" className="card-img-top" alt="..." />
                        </div>
                        <div className="col-5">
                            {<h1>{planetDetailsContainer.name + " (" + id + ")"}</h1>}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem nemo dolor itaque sunt accusamus laboriosam hic praesentium quo quos porro consequuntur numquam doloribus, iure veritatis quisquam necessitatibus, repellat tenetur!</p>
                        </div>
                        <div className="col-1"></div>
                    </div>

                    <div className="row">
                        <div className="col-12 my-4">
                            <img src="https://pngimg.com/d/lightsaber_PNG14.png" className="card-img-top" alt="..." />

                        </div>
                    </div>

                    <div className="container my-2">
                        <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <h3>Gender</h3>
                                <p>{planetDetailsContainer.gender}</p>
                            </div>

                            <div className="col-3">
                                <h3>Birth year</h3>
                                <p>{planetDetailsContainer.birth_year}</p>
                            </div>


                            <div className="col-3">
                                <h3>Homeworld</h3>
                                <p>{planetDetailsContainer.homeworld}</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <h3>Eye color</h3>
                                <p>{planetDetailsContainer.eye_color}</p>
                            </div>

                            <div className="col-3">
                                <h3>Height</h3>
                                <p>{planetDetailsContainer.height}</p>
                            </div>

                            <div className="col-3">
                                <h3>Skin color</h3>
                                <p>{planetDetailsContainer.skin_color}</p>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <p>Cargando</p>
            )}



            <button className="btn btn-primary">
                <NavLink to="/" className="card-link text-white">Back to blog</NavLink>
            </button>
        </div>
    );
}; 