import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import { FiTrendingDown } from 'react-icons/fi'
export const StatCards = () => {
    return (
        <>
            <Card
                title="New Employee"
                value="35"
                pillText="+5%"
                trend="down"
                period="This Month"
            />
            <Card
                title="Total Employees"
                value="270"
                pillText="+2%"
                trend="up"
                period="This Year"
            />
            <Card
                title="Average Salary"
                value="$4,500"
                pillText="Stable"
                trend="up"
                period="This Quarter"
            />
        </>
    )
}

const Card = ({ title, value, pillText, trend, period }) => {


    return (
        <div className="min-h-[180px] p-6 bg-white border mt-3 shadow-md  rounded-[21px] col-span-4">
            <h3 className="text-stone-500 text-sm mt-1 ">{title}</h3>
            <div className='flex justify-between'>
                <p className="text-3xl font-semibold text-stone-900 mt-1">{value}</p>

                <div class="w-24 h-24 relative bottom-5">
                    <svg viewBox="0 0 36 36" class="w-full h-full">

                        <circle cx="18" cy="18" r="12.9155" class="stroke-blue-100" stroke-width="4" fill="none" />
                        <circle cx="18" cy="18" r="15.9155" class="stroke-blue-500 transition-all duration-700" stroke-width="4" fill="none"
                            stroke-dasharray="100"
                            stroke-dashoffset="30" stroke-linecap="round" transform="rotate(-90 18 18)" />
                    </svg>

                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-lg font-semibold text-gray-800">70%</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span
                    className={`flex items-center gap-1 text-xs font-semibold py-2 px-3 mt-5 rounded-full ${trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-800 bg-red-100'
                        }`}
                >
                    {trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>

                <span className="text-xs text-stone-600 mt-8 mr-2">{period}</span>
            </div>




        </div>
    )
}
