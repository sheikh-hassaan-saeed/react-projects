import React from "react";
import Packages from "../../assets/packages";
import "./PackageCard.css";
import { useNavigate } from 'react-router-dom'

const PackageCard = () => {
    const navigate = useNavigate();

    const handleBook = (testName) => {
        navigate('/bookForm', { state: { testName } });
    };

    return (
        <section className="packages-section">
            <div className="package-grid">
                {Packages.map((value, index) => (
                    <div key={index} className="package-card">
                        <div className="card-top">
                            <div className="icon-box">
                                <img src={value.image} alt={value.name} />
                            </div>
                            <div className="rating-tag">
                                <span className="star-svg">★</span>
                                <span className="rating-val">{value.rating}</span>
                            </div>
                        </div>

                        <div className="card-info">
                            <h3 className="package-name">{value.name}</h3>
                            <p className="package-text">{value.paragraph}</p>
                        </div>

                        <div className="card-bottom">
                            <div className="price-tag">
                                <span className="label">Total Cost</span>
                                <span className="amount">{value.price}</span>
                            </div>
                            <button
                                className="action-button"
                                onClick={() => handleBook(value.name)}
                            >
                                Book Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PackageCard;