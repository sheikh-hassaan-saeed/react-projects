import React from 'react'
import Sidebar from "../sidebar/Sidebar"
const Layout = ({ children }) => {
    return (
        <div className='grid g-4 p-4 bg-[#1B263B] grid-cols-[220px,_1fr]' >
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout