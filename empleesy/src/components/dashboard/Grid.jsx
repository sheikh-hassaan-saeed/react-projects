import React from 'react'
import { StatCards } from './StatCards'
import PieChart from './PieChart'
import LeaveSummary from './LeaveSummary'
import ExportCSVButton from './ExportCSVButton'

const Grid = ({ employees, leaveRequests = [] }) => {
    console.log('Grid received leaveRequests:', leaveRequests)

    const thisMonthLeaves = leaveRequests.filter(req => {
        if (!req.startDate || !req.endDate) return false

        const startDate = new Date(req.startDate)
        const endDate = new Date(req.endDate)
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        // Check if leave overlaps with current month
        const monthStart = new Date(currentYear, currentMonth, 1)
        const monthEnd = new Date(currentYear, currentMonth + 1, 0)

        return (
            req.status === 'approved' &&
            startDate <= monthEnd &&
            endDate >= monthStart
        )
    })
    console.log('thisMonthLeaves:', thisMonthLeaves)  // ADD THIS
    console.log('Current month:', new Date().getMonth())  // ADD THIS


    // Total days taken this month
    const totalDaysThisMonth = thisMonthLeaves.reduce((sum, req) => {
        return sum + (Number(req.days) || 0)
    }, 0)

    // Avatar color selector
    const getAvatarColor = (index) => {
        const colors = [
            'bg-blue-500',
            'bg-green-500',
            'bg-orange-500',
            'bg-pink-500',
            'bg-purple-500',
            'bg-red-500'
        ]
        return colors[index % colors.length]
    }

    return (
        <div className="px-4 grid grid-cols-12 gap-4 w-full relative">

            {/* Stat cards */}
            <div className="col-span-12 flex justify-center">
                <div className="w-[98%] grid grid-cols-12 gap-4">
                    <StatCards employees={employees} />
                </div>
            </div>

            {/* Pie chart */}
            <div className="mt-2 md:col-span-6 mr-4">
                <PieChart employees={employees} />
            </div>

            {/* Leave summary */}
            <div className="mt-2 md:col-span-6">
                <LeaveSummary
                    thisMonthLeaves={thisMonthLeaves}
                    getAvatarColor={getAvatarColor}
                    totalDaysThisMonth={totalDaysThisMonth}
                />
            </div>

            {/* Export CSV */}
            <div className="md:col-span-12">
                <ExportCSVButton EmployeesData={employees} />
            </div>
        </div>
    )
}

export default Grid
