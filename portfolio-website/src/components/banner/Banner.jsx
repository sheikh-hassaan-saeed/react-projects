import React from 'react'
import './Banner.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import circle from '../../assets/circle.png'

const Banner = () => {
    return (
        <div className="portfolio-banner">

            <div className="banner-img">
                <img src={circle} />
            </div>
            <div className="main-text-area">
                <div className="text-area">
                    <p>Hello, I'm</p>
                    <h1>Sheikh Hassaan</h1>
                    <p className='text-p2'>Frontend Developer</p>
                </div>

                <div className="buttons">
                    <button className='Active'>Download CV</button>
                    <button>Contact Info</button>
                </div>


                <div className="social-links">
                    <img src={linkedin} className='icon' />
                    <img src={github} className='icon' />
                </div>
            </div>

        </div>
    )
}

export default Banner