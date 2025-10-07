import React from 'react'
import './Reviews.css'
import person from '../../assets/images/person-icon.png'

const Reviews = () => {
    return (
        <>
            <h2 className='h2-reviews'>What People Say</h2>
            <div className="reviews-container">

                <div className="review-box">
                    <div className="review">
                        <img src={person} />
                        <h3>Andrew Andy</h3>
                        <p>Lorem ipsum dolor sit amet.</p>

                    </div>
                </div>

                <div className="review-box">
                    <div className="review">
                        <img src={person} />
                        <h3>Ricky Raynold</h3>
                        <p>Lorem, ipsum dolor sit amet.</p>
                    </div>
                </div>

                <div className="review-box">
                    <div className="review">
                        <img src={person} />
                        <h3>Hannah Porter</h3>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews