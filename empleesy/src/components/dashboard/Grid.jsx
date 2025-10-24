import React from 'react'
import { StatCards } from './StatCards'
import Suggestions from './Suggestions'
import Department from './Department'
const Grid = () => {
    return (
        <>
            <div className='px-4 grid gap-4 grid-cols-12'>
                <StatCards />
                <div className='grid grid-cols-2 gap-[750px] '>
                    <Suggestions />
                    <Department />
                </div>





            </div>
        </>
    )
}

export default Grid
