import React from "react";
import { NavLink } from "react-router-dom";

const Card = (character) => {
    return (
        <div className="container-fluid py-2">

            
                {/* Card */}
                <div className="card" style={{ width: "20rem" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">Character description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aperiam dignissimos amet vel aspernatur velit cupiditate eaque esse in ducimus totam debitis similique deleniti ut, error sit, quis tempore tenetur.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <NavLink to={"/details/"+character.id} className="card-link">Card link</NavLink>
                        {/* <NavLink to="#" className="card-link">Another link</NavLink> */}
                    </div>
                </div>

        </div>
    );
};

export default Card;
