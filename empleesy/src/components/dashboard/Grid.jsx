import React from 'react'
import { StatCards } from './StatCards'
import CompanyHealth from './CompanyHealth'
import PieChart from './PieChart'

const Grid = ({ employees }) => {
    return (
        <>
            <div className="px-4 grid grid-cols-12 gap-4 w-full relative">

                <div className="col-span-12 flex justify-center">
                    <div className="w-[98%] grid grid-cols-12 gap-4">
                        <StatCards employees={employees} />
                    </div>
                </div>
                <div className=" mt-2 w-[100%] col-span-5">
                    <PieChart />
                </div>
                <div className=" col-span-7">

                    <CompanyHealth />
                </div>


            </div>


        </>
    )
}

export default Grid