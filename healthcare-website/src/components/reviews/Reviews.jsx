import React from 'react';
import './Reviews.css';
import person from '../../assets/images/person-icon.png';

const Reviews = () => {
    const reviewsData = [
        { id: 1, name: "Andrew Andy", text: "The diagnostic precision here is unmatched. The staff made me feel very comfortable throughout the process." },
        { id: 2, name: "Ricky Raynold", text: "Fast results and very professional service. I highly recommend DocX Labs for any medical testing." },
        { id: 3, name: "Hannah Porter", text: "Clean facilities and easy booking. The online profile feature makes tracking my health history so simple." }
    ];

    return (
        <section className="reviews-section">
            <div className="reviews-header">
                <span className="accent-text">Testimonials</span>
                <h2 className='h2-reviews'>What Our Patients Say</h2>
            </div>

            <div className="reviews-container">
                {reviewsData.map((rev) => (
                    <div key={rev.id} className="review-card">
                        <div className="stars">★★★★★</div>
                        <p className="review-text">"{rev.text}"</p>
                        <div className="review-user">
                            <img src={person} alt={rev.name} className="user-avatar" />
                            <div className="user-info">
                                <h3>{rev.name}</h3>
                                <span>Verified Patient</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;