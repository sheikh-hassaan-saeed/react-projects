import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Packages from '../../pages/packages/Packages';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <h2>DocX Labs</h2>

            <div
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to='/'>Home</Link>
                <Link to='/packages'>Tests & Packages</Link>
                <a href="#">Book a Test</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
};

export default NavBar;
