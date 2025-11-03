import React from 'react'
import { StatCards } from './StatCards'
import CompanyHealth from './CompanyHealth'
import EmployeesModel from '../employees/EmployeesModel'
const Grid = () => {
    return (
        <>
            <div className="px-4 grid grid-cols-12 gap-4 w-full relative">

                {/* <div className="col-span-12 flex justify-center">
                    <div className="w-[98%] grid grid-cols-12 gap-4">
                        <StatCards />
                    </div>
                </div> */}

                {/* <div className="col-span-7">
                    <CompanyHealth />
                </div> */}

                <div className='col-span-4'>
                    <EmployeesModel />
                </div>


            </div>


        </>
    )
}

export default Grid