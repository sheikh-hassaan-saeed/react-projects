import React from "react"
import "./Services.css"
import Service from "../service/Service"
import services from "../../assets/services"

const Services = () => {
    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <div className="services-wrapper">
                {services.map((service, index) => (
                    <Service
                        key={index}
                        name={service.name}
                        paragraph={service.paragraph}
                        image={service.Image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services
