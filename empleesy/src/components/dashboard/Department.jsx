import React from 'react'

const Department = () => {
    return (
        <div className=" mt-6 flex flex-col gap-2 border w-[32rem] h-88 bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-[21px] shadow-md ml-3">
            <h3 className='text-slate-600'>Top Performing Departments</h3>

            <div className='flex gap-44 mt-3'>

                <div className=' ml-4'>
                    <p >Departments</p>
                </div>

                <div className='flex gap-16'>
                    <p className='-ml-2'>Revenue</p>
                    <p >W/L</p>
                </div>
            </div>

            <div className='flex gap-36 p-2 mt-1 bg-white shadow-md rounded-[15px]'>

                <div>
                    <p className='mb-2 py-1 px-4 rounded-[21px]' >Engineering</p>
                    <p className='mb-2  py-1 px-4 rounded-[21px]'>Marketing</p>
                    <p className='mb-2  py-1 px-4 rounded-[21px]'>UI/UX</p>
                </div>

                <div className='flex gap-6' >
                    <div>
                        <p className='mb-2 bg-green-100 text-green-700 py-1 px-4  rounded-[21px]'>$207,808</p>
                        <p className='mb-2 bg-green-100 text-green-700 py-1 px-4  rounded-[21px]'>$180,434</p>
                        <p className='mb-2 bg-green-100 text-green-700 py-1 px-4  rounded-[21px]'>$120,948</p>
                    </div>

                    <div>
                        <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4  rounded-[21px]'>23%</p>
                        <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4   rounded-[21px]'>17%</p>
                        <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4  rounded-[21px]'>12%</p>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default Department