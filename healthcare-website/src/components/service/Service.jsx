import React from "react";
import "./Service.css";

const Service = ({ image, name, paragraph }) => {
    return (
        <div className="service-card">
            <div className="service-icon">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

export default Service;
