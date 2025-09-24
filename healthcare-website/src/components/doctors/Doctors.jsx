import React from 'react'
import './Doctors.css'
import Doctor from '../doctor/Doctor'
const Doctors = () => {
    return (
        <div className="doctors-container">
            <h2>Our Doctors</h2>

            <div className="doctors-wrapper">
                <Doctor />
            </div>

        </div>

    )
}

export default Doctors