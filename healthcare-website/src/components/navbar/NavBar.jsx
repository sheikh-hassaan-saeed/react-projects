import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import person from '../../assets/images/person.png';
import Profile from '../profile/Profile';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <h2 className="logo">DocX Labs</h2>

            <div className={`nav-center ${isOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/packages">Tests & Packages</Link>
                    <Link to='/contact'>Contact Us</Link>
                </div>
            </div>

            <div className="user-container">
                <Link to="/profile">My Profile</Link>
                <img src={person} alt="profile" />
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default NavBar;
