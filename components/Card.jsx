import React from "react";
import web from '../images/image2.jpg';
import {NavLink} from "react-router-dom";

const Card = (props) => {
    return (
        <>
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Click on the below button for the virtual tour.</p>
                            <NavLink to={props.visit} className="btn btn-primary">{props.btntext}</NavLink>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Card;