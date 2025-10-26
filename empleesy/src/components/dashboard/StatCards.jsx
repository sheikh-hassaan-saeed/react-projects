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
        <div className="h-[170px] px-6 py-4 bg-gradient-to-br from-slate-50 to-slate-100 border mt-2 shadow-md  rounded-[21px] col-span-4">
            <h3 className="text-slate-600 text-[12px] mt-1 ">{title}</h3>
            <div className='flex justify-between'>
                <p className="text-2xl font-semibold text-stone-900 mt-1">{value}</p>

                <div class="w-20 h-20 relative bottom-5">
                    <svg viewBox="0 0 36 36" class="w-full h-full">

                        <circle cx="18" cy="18" r="12.9155" class="stroke-blue-100" stroke-width="4" fill="none" />
                        <circle cx="18" cy="18" r="15.9155" class="stroke-blue-500 transition-all duration-700" stroke-width="3" fill="none"
                            stroke-dasharray="100"
                            stroke-dashoffset="30" stroke-linecap="round" transform="rotate(-90 18 18)" />
                    </svg>

                    <div class="absolute inset-1 flex items-center justify-center">
                        <div class="text-[13px] font-semibold text-gray-800">70%</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-2">
                <span
                    className={`flex items-center gap-1 text-[11px] font-semibold py-1 px-2 rounded-full ${trend === 'up' ? 'text-green-700 bg-green-100' : 'text-red-800 bg-red-100'
                        }`}
                >
                    {trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>

                <span className="text-xs text-stone-600 mr-2">{period}</span>
            </div>




        </div>
    )
}
