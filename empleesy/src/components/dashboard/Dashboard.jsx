import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'

const Dashboard = ({ employees, leaveRequests }) => {
    console.log('Dashboard received leaveRequests:', leaveRequests)

    return (
        <div className='bg-white rounded-lg pb-4 shadow h-[110vh]'>
            <TopBar />
            <Grid employees={employees} leaveRequests={leaveRequests} />
        </div>
    )
}

export default Dashboard