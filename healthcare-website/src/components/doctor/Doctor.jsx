import React from 'react'
import './Doctor.css'
import doctors from '../../assets/doctors'
const Doctor = () => {
    return (
        <>
            {doctors.map((doctor, index) =>
                <div className="doctor-container">
                    <div className="doctor-img">
                        <img src={doctor.image} />
                    </div>

                    <div className="doctor-name">
                        <h3>{doctor.name}</h3>
                    </div>

                    <div className="doctor-profession">
                        <p>{doctor.profession}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default Doctor;