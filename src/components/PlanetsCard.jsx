import React from "react";
import { NavLink } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const PlanetsCard = ({ name, id }) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container-fluid py-2">

            <div className="card" style={{ width: "18rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" id={id}>{name}</h5>
                    <p className="card-text">Character description: Lorem ipsum dolor...</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>

                <div className="card-body d-flex justify-content-between">

                    <button className="btn btn-primary">
                        <NavLink to={"/planetsdetails/" + id} className="card-link text-white ">Read more</NavLink>
                    </button>

                    <button className="btn btn-warning">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PlanetsCard;
