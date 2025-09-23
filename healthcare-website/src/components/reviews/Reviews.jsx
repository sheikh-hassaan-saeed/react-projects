import React from 'react'
import './Reviews.css'
import Image1 from '../../assets/images/1.jpg'
import Image2 from '../../assets/images/2.jpg'
import Image3 from '../../assets/images/3.jpg'

const Reviews = () => {
    return (
        <>
            <h2>What People Say</h2>
            <div className="reviews-container">


                <div className="review">
                    <img src={Image1} />
                    <h3>Andrew Andy</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="review">
                    <img src={Image2} />
                    <h3>Ricky Raynold</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="review">
                    <img src={Image3} />
                    <h3>Hannah Porter</h3>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
            </div>
        </>
    )
}

export default Reviews