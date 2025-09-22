import React from 'react'
import './Service.css'
import services from '../../assets/services'
const Service = () => {
    return (

        <>
            {services.map((service, index) =>
                <div className="service-container">
                    <div className="service-img">
                        <img src={service.Image} />
                    </div>

                    <div className="service-h3">
                        <h3>{service.name}</h3>
                    </div>
                    <div className="service-p">
                        <p>{service.paragraph}</p>
                    </div>

                </div>
            )}
        </>
    )
}

export default Service;