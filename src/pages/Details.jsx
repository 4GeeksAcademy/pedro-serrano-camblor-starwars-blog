import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink, useParams } from "react-router-dom";


export const Details = (character) => {

    let {id} = useParams()
    const { store, dispatch } = useGlobalReducer()

    console.log(useParams());
    

    return (
        <div className="text-center mt-5">
            <h1>{"Item details: " + character.id}</h1>

            <div className="bg-success text-white">

                <p>Aqui</p>
                <p>{character.name}</p>


            </div>

            <button className="btn btn-primary">

                <NavLink to="/" className="card-link text-white">Back to blog</NavLink>

            </button>
        </div>
    );
}; 