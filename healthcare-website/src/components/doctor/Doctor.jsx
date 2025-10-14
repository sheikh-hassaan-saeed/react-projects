import React from "react";
import "./Doctor.css";
import doctors from "../../assets/doctors";

const Doctor = () => {
    return (
        <div className="doctors-grid">
            {doctors.map((doctor, index) => (
                <div className="doctor-card" key={index}>
                    <div className="doctor-img">
                        <img src={doctor.image} alt={doctor.name} />
                    </div>

                    <div className="doctor-info">
                        <h3>{doctor.name}</h3>
                        <p>{doctor.profession}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Doctor;
