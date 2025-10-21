import React from 'react'
import { StatCards } from './StatCards'
import Suggestions from './Suggestions'

const Grid = () => {
    return (
        <>
            <div className='px-4 grid gap-4 grid-cols-12'>
                <StatCards />
            </div>
        </>
    )
}

export default Grid
