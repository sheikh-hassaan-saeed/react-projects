import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'

const Dashboard = () => {
    return (
        <div className='bg-white rounded-lg pb-4 shadow h-[220vh]'>
            <TopBar />
            <Grid />
        </div >
    )
}

export default Dashboard