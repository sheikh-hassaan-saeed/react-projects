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
        <div className="packagecard-container">
            {Packages.map((value, index) => {
                const stars = "⭐".repeat(value.rating);

                return (
                    <div key={index} className="package-card">
                        <div className="card-header">
                            <div className="img">
                                <img src={value.image} alt={value.name} />
                            </div>
                            <div className="rating">
                                <span className="stars">{stars}</span>
                                <span className="rating-number">{value.rating}</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <h2 className="package-title">{value.name}</h2>
                            <p className="package-description">{value.paragraph}</p>
                        </div>

                        <div className="card-footer">
                            <div className="price-section">
                                <span className="price-label">Starting from</span>
                                <span className="price">{value.price}</span>
                            </div>
                            <button
                                className="book-button"
                                onClick={() => handleBook(value.name)}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PackageCard;