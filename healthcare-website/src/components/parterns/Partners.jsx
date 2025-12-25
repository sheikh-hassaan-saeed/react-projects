import React from 'react';
import './Partners.css';
import partner1 from '../../assets/images/logo-1.png'
import partner2 from '../../assets/images/logo-2.png'
import partner3 from '../../assets/images/logo-3.png'
import partner4 from '../../assets/images/logo-4.png'
import partner5 from '../../assets/images/logo-5.png'
import partner6 from '../../assets/images/logo-6.png'
const Partners = () => {
    const partnerList = [partner1, partner2, partner3, partner4, partner5, partner6];

    return (
        <section className="partners-section">
            <div className="explore-wrapper">
                <button className="btn-secondary">Explore More Services</button>
            </div>

            <div className="partners-header">
                <span className="subtitle">Trusted Collaborations</span>
                <h2>Our Health Partners</h2>
                <p>We work with the industry's leading healthcare providers to ensure the highest quality of diagnostic care.</p>
            </div>

            <div className="partners-grid-container">
                <div className="partners-grid">
                    {partnerList.map((partner, index) => (
                        <div key={index} className="partner-card">
                            <img src={partner} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;