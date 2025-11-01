import React from 'react'
import { StatCards } from './StatCards'
import Suggestions from './Suggestions'
import Department from './Department'
import CompanyHealth from './CompanyHealth'
import Meetings from './MeetingCard'
import AISuggestions from './AISuggestions'
const Grid = () => {
    return (
        <>
            <div className="px-4 grid grid-cols-12 gap-4 w-full relative">

                <div className="col-span-12 flex justify-center">
                    <div className="w-[98%] grid grid-cols-12 gap-4">
                        <StatCards />
                    </div>
                </div>

                <div className="col-span-5 flex flex-col gap-4">
                    <Suggestions />
                    <Department />
                    <Meetings />
                </div>

                <div className="col-span-7">
                    <CompanyHealth />
                </div>
                <div className='col-span-12'>
                    <AISuggestions />
                </div>

            </div>


        </>
    )
}

export default Grid