import React from 'react'
import './NavBar.css'
import logo from '../../assets/images/logo.png'
const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} />

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Laboratory Test</a>
                <a href="#">Doctors List</a>
                <a href="#">Hospital Contact</a>
            </div>
        </div>
    )
}

export default NavBar