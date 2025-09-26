import React, { useState } from 'react';
import './NavBar.css';

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
                <a href="#">Home</a>
                <a href="#">Laboratory Test</a>
                <a href="#">Doctors List</a>
                <a href="#">Hospital Contact</a>
            </div>
        </div>
    );
};

export default NavBar;
