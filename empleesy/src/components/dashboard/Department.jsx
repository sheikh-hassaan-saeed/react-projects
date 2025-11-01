import React from 'react'

const Department = () => {
    return (
        <>
            <div className='mr-4'>
                <div className=" mt-2 flex flex-col gap-2 border w-full h-54 bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-[21px] shadow-md ml-3">
                    <h3 className='text-slate-600 text-[12px]'>Top Performing Departments</h3>

                    <div className='flex gap-20 mt-3'>

                        <div className='  ml-4'>
                            <p className='text-[12px]'>Departments</p>
                        </div>

                        <div className='flex gap-12'>
                            <p className='-ml-2 text-[12px]'>Revenue</p>
                            <p className='text-[12px]'>W/L</p>
                        </div>
                    </div>

                    <div className='flex gap-14 p-2 mt-1 bg-white shadow-md rounded-[15px]'>

                        <div>
                            <p className='mb-2 py-1 px-4 rounded-[21px] text-[11px]' >Engineering</p>
                            <p className='mb-2  py-1 px-4 rounded-[21px] text-[11px]'>Marketing</p>
                            <p className='mb-2  py-1 px-4 rounded-[21px] text-[11px]'>UI/UX</p>
                        </div>

                        <div className='flex gap-2' >
                            <div>
                                <p className='mb-2 bg-green-100 text-green-700 py-1 px-4  rounded-[21px] text-[11px]'>$207,808</p>
                                <p className='mb-2 bg-green-100 text-green-700 py-1 px-4  rounded-[21px] text-[11px]'>$180,434</p>
                                <p className='mb-2 bg-green-100 text-green-700 py-1 px-4  rounded-[21px] text-[11px]'>$120,948</p>
                            </div>

                            <div>
                                <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4  rounded-[21px] text-[11px]'>23%</p>
                                <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4   rounded-[21px] text-[11px]'>17%</p>
                                <p className='mb-2 bg-stone-900 text-stone-100 py-1 px-4  rounded-[21px] text-[11px]'>12%</p>
                            </div>

                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}

export default Department