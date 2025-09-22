import React from 'react'
import './Banner.css'
import ellipse from '../../assets/images/ellipse.png'
import bannerDoctor from '../../assets/images/banner-doctor.png'
const Banner = () => {
    return (
        <div className="banner">
            <div className="text-area">
                <h2>St.Jhon Hospital</h2>
                <p>Lorem ipsum dolor sit amet.</p>


                <div className="buttons">
                    <button>Appointment</button>
                    <button>Know More</button>
                </div>
            </div>

            <div className="banner-img">
                <img src={ellipse} className='ellipse-pic' />
                <img src={bannerDoctor} className='doctor-pic' />
            </div>
        </div>
    )
}

export default Banner