import React from 'react'
import TopBar from './TopBar'
import Grid from './Grid'
import EmployeesData from '../sidebar-page/EmployeesData'

const Dashboard = () => {


    return (
        <div className='bg-white rounded-lg pb-4 shadow  h-[220vh]'>
            <TopBar />
            <Grid />
            {/* <EmployeesData /> */}
        </div >
    )
}

export default Dashboard