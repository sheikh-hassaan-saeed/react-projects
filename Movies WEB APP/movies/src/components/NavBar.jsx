import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='brand-name'>
                <Link to='/'>HS Movies</Link>
            </div>
            <div className='nav-links'>
                <Link to='/' >Home</Link>
                <Link to='/favourites' >Favourites</Link>
            </div>
        </div>
    )
}

export default NavBar