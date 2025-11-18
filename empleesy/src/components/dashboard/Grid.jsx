import React from 'react'
import { StatCards } from './StatCards'
import PieChart from './PieChart'
import LeaveSummary from './LeaveSummary'

const Grid = ({ employees }) => {
    return (
        <>
            <div className="px-4 grid grid-cols-12 gap-4 w-full relative">

                <div className="col-span-12 flex justify-center">
                    <div className="w-[98%] grid grid-cols-12 gap-4">
                        <StatCards employees={employees} />
                    </div>
                </div>


                <div className="mt-2 col-span-6">
                    <PieChart employees={employees} />
                </div>

                <div className="mt-2 col-span-6 w-full">
                    <LeaveSummary />
                </div>




            </div>


        </>
    )
}

export default Grid