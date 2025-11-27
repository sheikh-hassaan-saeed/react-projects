import React from 'react'
import { StatCards } from './StatCards'
import PieChart from './PieChart'
import LeaveSummary from './LeaveSummary'
import ExportCSVButton from './ExportCSVButton'
const Grid = ({ employees, leaveRequests = [] }) => {

    // 🔥 CALCULATE THIS MONTH'S LEAVES
    const thisMonthLeaves = leaveRequests.filter(req => {
        const startDate = new Date(req.startDate)
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()
        return req.status === 'approved' &&
            startDate.getMonth() === currentMonth &&
            startDate.getFullYear() === currentYear
    })

    // 🔥 CALCULATE TOTAL DAYS
    const totalDaysThisMonth = thisMonthLeaves.reduce((sum, req) => sum + req.days, 0)

    // 🔥 AVATAR COLOR FUNCTION
    const getAvatarColor = (index) => {
        const colors = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500', 'bg-purple-500', 'bg-red-500']
        return colors[index % colors.length]
    }

    return (
        <div className="px-4 grid grid-cols-12 gap-4 w-full relative">

            <div className="col-span-12 flex justify-center">
                <div className="w-[98%] grid grid-cols-12 gap-4">
                    <StatCards employees={employees} />
                </div>
            </div>

            <div className="mt-2  md:col-span-6 mr-4">
                <PieChart employees={employees} />
            </div>

            <div className="mt-2 md:col-span-6 ">
                <LeaveSummary
                    thisMonthLeaves={thisMonthLeaves}
                    getAvatarColor={getAvatarColor}
                    totalDaysThisMonth={totalDaysThisMonth}
                />
            </div>
            <div className='md:col-span-12 '>
                <ExportCSVButton EmployeesData={employees} />

            </div>
        </div>
    )
}

export default Grid