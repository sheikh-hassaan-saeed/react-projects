import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'
import { useState, useEffect } from 'react'
const Dashboard = ({ employees }) => {
    const [leaveRequests, setLeaveRequests] = useState(() => {
        const saved = localStorage.getItem('leaveRequests')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests))
    }, [leaveRequests])
    return (
        <div className='bg-white rounded-lg pb-4 shadow  h-[220vh]'>
            <TopBar />
            <Grid employees={employees} leaveRequests={leaveRequests} />
        </div >
    )
}

export default Dashboard