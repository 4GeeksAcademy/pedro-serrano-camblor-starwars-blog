import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink, useParams } from "react-router-dom";
import { getStarshipDetails } from "../services/starwarsServices.js";
import { useEffect } from "react";


export const StarshipsDetails = () => {

    let { id } = useParams()

    const { store, dispatch } = useGlobalReducer()

    console.log(id);

    useEffect(() => {

        getStarshipDetails(id)
            .then((data) => dispatch({ type: "update_starshipDetails", payload: data }))

    }, [])


    const starshipDetailsContainer = store.starshipDetails.properties
    console.log(starshipDetailsContainer);

    return (
        <div className="container text-center mt-5">
            {starshipDetailsContainer ? (
                <>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" className="card-img-top" alt="..." />
                        </div>
                        <div className="col-5">
                            {<h1>{starshipDetailsContainer.name}</h1>}
                            <p>The missing description of a Starship {" (" + id + ")"}</p>
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
                                <h3>Startship class</h3>
                                <p>{starshipDetailsContainer.starship_class}</p>
                            </div>

                            <div className="col-3">
                                <h3>Cargo capacity</h3>
                                <p>{starshipDetailsContainer.cargo_capacity}</p>
                            </div>


                            <div className="col-3">

                                <h3>Cost in credits</h3>
                                <p>{starshipDetailsContainer.cost_in_credits}</p>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-between">
                            <div className="col-3">
                                <h3>Length</h3>
                                <p>{starshipDetailsContainer.length}</p>
                            </div>

                            <div className="col-3">
                                <h3>Max. atmos. speed</h3>
                                <p>{starshipDetailsContainer.max_atmosphering_speed}</p>
                            </div>

                            <div className="col-3">
                                <h3>Hyperdrive rating</h3>
                                <p>{starshipDetailsContainer.hyperdrive_rating}</p>
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