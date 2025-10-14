import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import person from '../../assets/images/person.png';
import Profile from '../profile/Profile';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null)
    useEffect(() => {
        function handleMouseClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleMouseClickOutside);
        return (
            document.removeEventListener('mousedown', handleMouseClickOutside)
        )
    }, [])

    return (
        <div className="navbar" ref={navRef}>
            <h2 className="logo">DocX Labs</h2>

            <div className={`nav-center ${isOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/packages" onClick={() => setIsOpen(false)}>Tests & Packages</NavLink>
                    <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                    <NavLink to="/profile" onClick={() => setIsOpen(false)} className='profile-nav'>My Profile</NavLink>

                </div>
            </div>

            <div className="user-container">
                <Link to="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>
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
