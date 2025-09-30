import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <div className="navbar-portfolio">
                <h2>Hassaan.</h2>
                <div
                    className="hamburger"
                    onClick={() => setisOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <a href='#home'>Home</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>
        </>
    )
}

export default Navbar