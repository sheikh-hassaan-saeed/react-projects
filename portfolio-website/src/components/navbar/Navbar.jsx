import React, { useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);
    const menuref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuref.current && !menuref.current.contains(event.target)) {
                setisOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    return (
        <>
            <div className="navbar-portfolio" ref={menuref}>
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
                    <Link to="/" smooth={true} duration={500} onClick={() => setisOpen(false)}>Home</Link>
                    <Link to="skills" smooth={true} offset={-130} duration={500} onClick={() => setisOpen(false)}>Skills</Link>
                    <Link to="projects" smooth={true} offset={-50} duration={500} onClick={() => setisOpen(false)}>Projects</Link>
                    <Link to="contact" smooth={true} duration={500} onClick={() => setisOpen(false)}>Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar