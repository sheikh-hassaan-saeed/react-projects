import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Sidebar from "../sidebar/Sidebar"
const Layout = ({ children }) => {
    return (
        <div className='grid g-4 p-4 bg-white grid-cols-[280px,_1fr]' >
            <Sidebar />
            <Dashboard />
        </div>
    )
}

export default Layout