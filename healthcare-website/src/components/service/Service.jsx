import React from "react"
import "./Service.css"

const Service = ({ image, name, paragraph }) => {
    return (
        <div className="service-container">
            <div className="service-img">
                <img src={image} alt={name} />
            </div>
            <div className="service-h3">
                <h3>{name}</h3>
            </div>
            <div className="service-p">
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default Service
