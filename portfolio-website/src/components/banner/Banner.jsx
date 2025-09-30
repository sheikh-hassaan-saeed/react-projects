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
                    <a href='#' className='cv-btn'> Download CV</a>
                    <a href="#contact" className='contact-btn'>Contact Info</a>
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