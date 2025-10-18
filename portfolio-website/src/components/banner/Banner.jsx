import './Banner.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import circle from '../../assets/circle.png'
import arrow from '../../assets/arrow.png'
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
                    <a href='#' className='exp-btn'>Explore More </a>
                    <img className='arrow-btn' src={arrow} />
                </div>


                <div className="social-links">
                    <a href="https://www.linkedin.com/in/sheikh-hassaan-saeed"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={linkedin} className='icon' /></a>
                    <a href="https://github.com/sheikh-hassaan-saeed"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={github} className='icon' /></a>
                </div>
            </div>

        </div>
    )
}

export default Banner