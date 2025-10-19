import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Sidebar = () => {
    return (
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
            <Logo />
            <SearchBar />
        </div>
    )
}

export default Sidebar