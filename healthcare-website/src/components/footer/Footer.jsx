import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/images/footer logo.png'
const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="footer-img">
                    <h2>DocX</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="column">
                    <h3>Medic</h3>
                    <a href='#'>Home</a>
                    <a href='#'>Medical Care</a>
                    <a href='#'>Laboratory Tests</a>
                    <a href='#'>Medical Labs</a>
                </div>

                <div className="column">
                    <h3>About</h3>
                    <a href='#'>Home</a>
                    <a href='#'>Medical Care</a>
                    <a href='#'>Laboratory Tests</a>
                    <a href='#'>Medical Labs</a>
                </div>

                <div className="column">
                    <h3>Social Media</h3>
                    <a href='#'>Home</a>
                    <a href='#'>Medical Care</a>
                    <a href='#'>Laboratory Tests</a>
                    <a href='#'>Medical Labs</a>
                </div>

            </div>

            <p className='copyright'>&copy; 2025 DocX. All rights reserved.</p>
        </>
    )
}

export default Footer