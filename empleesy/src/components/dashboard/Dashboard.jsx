import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'
import Suggestions from './Suggestions'
import Department from './Department'
const Dashboard = () => {
    return (
        <div className='bg-white rounded-lg pb-4 shadow  h-[220vh]'>
            <TopBar />
            <Grid />
            <Suggestions />
            <Department />
        </div >
    )
}

export default Dashboard