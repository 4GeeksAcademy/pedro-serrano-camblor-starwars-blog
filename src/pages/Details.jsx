import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { NavLink } from "react-router-dom";

export const Details = (character) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>{"Item details: "+character.uid}</h1>
            <button className="btn btn-primary">

                <NavLink to="/" className="card-link text-white">Back to blog</NavLink>

            </button>
        </div>
    );
}; 