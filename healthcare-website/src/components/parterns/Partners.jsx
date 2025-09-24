import React from 'react'
import './Partners.css'
import Partner1 from '../../assets/images/partner1.png'
import Partner2 from '../../assets/images/partner2.png'
import Partner3 from '../../assets/images/partner3.png'
import Partner4 from '../../assets/images/partner4.png'
import Partner5 from '../../assets/images/partner5.png'

const Partners = () => {
    return (
        <>
            <div className="explore-btn">
                <button>Explore More</button>
            </div>
            <div className="partners-container">
                <h2>Our Health Partners</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="partners">
                <div className='images'>
                    <img src={Partner1} />
                    <img src={Partner2} />
                    <img src={Partner3} />
                    <img src={Partner4} />
                    <img src={Partner5} />
                </div>
            </div>
        </>

    )
}

export default Partners