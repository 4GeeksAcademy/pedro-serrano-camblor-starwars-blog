import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink, useParams } from "react-router-dom";
import { getStarshipDetails } from "../services/starwarsServices.js";
import { useEffect } from "react";


export const PeopleDetails = () => {

    let { id } = useParams()

    const { store, dispatch } = useGlobalReducer()

    console.log(id);

    useEffect(() => {

        getStarshipDetails(id)
            .then((data) => dispatch({ type: "update_starshipDetails", payload: data }))

    }, [])


    return (
        <div className="container text-center mt-5">

            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" className="card-img-top" alt="..." />
                </div>
                <div className="col-5">
                    <h1>{"Item details: " + id}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem nemo dolor itaque sunt accusamus laboriosam hic praesentium quo quos porro consequuntur numquam doloribus, iure veritatis quisquam necessitatibus, repellat tenetur!</p>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row">
                <div className="col-12 my-4">
                    <img src="https://pngimg.com/d/lightsaber_PNG14.png" className="card-img-top" alt="..." />

                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <h3>Detail 1</h3>
                    <p>Lorem</p>
                </div>

                <div className="col-2">
                    <h3>Detail 2</h3>
                    <p>Lorem</p>
                </div>

                <div className="col-2">
                    <h3>Detail 3</h3>
                    <p>Lorem</p>
                </div>

                <div className="col-2">
                    <h3>Detail 4</h3>
                    <p>Lorem</p>
                </div>

                <div className="col-2">
                    <h3>Detail 5</h3>
                    <p>Lorem</p>
                </div>

                <div className="col-2">
                    <h3>Detail 6</h3>
                    <p>Lorem</p>
                </div>
            </div>

            <button className="btn btn-primary">
                <NavLink to="/" className="card-link text-white">Back to blog</NavLink>
            </button>
        </div>
    );
}; 