import React from 'react'
import './Services.css'
import Service from '../service/Service'
const Services = () => {
    return (
        <div className="services-container">
            <h2>Our Services</h2>

            <div className="services-wrapper">
                <Service />
            </div>
        </div>
    )
}

export default Services