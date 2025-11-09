import './Banner.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import circle from '../../assets/circle.png'

const Banner = () => {
    return (
        <div className="bg">
            <div className="portfolio-banner">
                <div className="banner-img">
                    <img src={circle} alt="Decorative circle background" />
                </div>
                <div className="main-text-area">
                    <div className="text-area">
                        <p>Hello, I'm</p>
                        <h1>Sheikh Hassaan</h1>
                        <p className='text-p2'>Frontend Developer</p>
                    </div>


                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/sheikh-hassaan-saeed"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={linkedin} className='icon' alt="LinkedIn profile" />
                        </a>
                        <a href="https://github.com/sheikh-hassaan-saeed"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={github} className='icon' alt="GitHub profile" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner