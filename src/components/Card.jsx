import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
    return (
        <div className="container-fluid py-2">

            <h2 className="font-weight-light">People</h2>
            <div className="d-flex flex-row flex-nowrap" style={{ overflowX: "auto", gap: "1rem", paddingBottom: "1rem" }}>

                {/* Card */}
                <div className="card" style={{ minWidth: "26rem" }}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card;
