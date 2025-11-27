import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import { FiTrendingDown } from 'react-icons/fi'

export const StatCards = ({ employees }) => {

    const totalEmployees = employees.length
    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0)
    const avgSalary = Math.round(totalSalary / totalEmployees)

    return (
        <>
            <Card
                title="New Employees"
                value="5"
                pillText="+5%"
                trend="down"
                period="This Month"
                icon={<UserPlusIcon />}
                progress={70}
            />

            <Card
                title="Total Employees"
                value={totalEmployees}
                pillText="+2%"
                trend="up"
                period="This Year"
                icon={<UsersIcon />}
                progress={85}
            />

            <Card
                title="Average Salary"
                value={`$${avgSalary.toLocaleString()}`}
                pillText="Stable"
                trend="up"
                period="This Year"
                icon={<DollarIcon />}
                progress={60}
            />
        </>
    )
}

const Card = ({ title, value, pillText, trend, period, icon, progress }) => {

    return (
        <div className="h-[170px] px-6 py-4 bg-gradient-to-br from-blue-50 to-rose-00 border border-blue-100 mt-2 shadow-md rounded-[21px] col-span-4">            <h3 className="text-slate-500 text-xs font-medium tracking-wide uppercase mt-1">{title}</h3>

            <div className='flex justify-between'>
                <p className="text-3xl font-semibold text-slate-800 mt-2 tracking-tight">{value}</p>

                <div className="w-20 h-20 relative bottom-5">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                        <circle cx="18" cy="18" r="15" className="stroke-indigo-100" strokeWidth="3.5" fill="none" />
                        <circle cx="18" cy="18" r="15" className="stroke-blue-600 transition-all duration-700" strokeWidth="3.5" fill="none"
                            strokeDasharray="100"
                            strokeDashoffset={100 - progress}
                            strokeLinecap="round"
                            transform="rotate(-90 18 18)" />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-blue-600">
                            {icon}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-3">
                <span
                    className={`flex items-center gap-1 text-xs font-semibold py-1.5 px-2.5 rounded-full 
          ${trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}
                >
                    {trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>

                <span className="text-xs text-slate-500 font-medium mr-2">{period}</span>
            </div>
        </div>
    )
}

// Icon Components
const UserPlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" strokeLinecap="round" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeLinecap="round" />
        <line x1="19" y1="8" x2="19" y2="14" strokeLinecap="round" />
        <line x1="22" y1="11" x2="16" y2="11" strokeLinecap="round" />
    </svg>
)

const UsersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" strokeLinecap="round" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.85" strokeLinecap="round" />
    </svg>
)

const DollarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)