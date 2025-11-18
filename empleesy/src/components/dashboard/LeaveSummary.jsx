import React from 'react'

const LeaveManagement = () => {
    return (
        <>
            {/* SECTION 3: THIS MONTH SUMMARY */}
            <div className='bg-gradient-to-br from-slate-50 to-slate-100 border shadow-md rounded-[21px] p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                    <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                    </svg>
                    This Month Leave Summary
                </h3>

                <div className='grid grid-cols-1 gap-6'>

                    {/* Employee 1 */}
                    <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>
                                    JD
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-gray-900'>John Doe</p>
                                    <p className='text-xs text-gray-600'>Engineering</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-2xl font-bold text-blue-600'>3</p>
                                <p className='text-xs text-gray-600'>days</p>
                            </div>
                        </div>
                    </div>

                    {/* Employee 2 */}
                    <div className='bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold'>
                                    JS
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-gray-900'>Jane Smith</p>
                                    <p className='text-xs text-gray-600'>Marketing</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-2xl font-bold text-green-600'>5</p>
                                <p className='text-xs text-gray-600'>days</p>
                            </div>
                        </div>
                    </div>

                    {/* Employee 3 */}
                    <div className='bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold'>
                                    BW
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-gray-900'>Bob Wilson</p>
                                    <p className='text-xs text-gray-600'>HR</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-2xl font-bold text-orange-600'>2</p>
                                <p className='text-xs text-gray-600'>days</p>
                            </div>
                        </div>
                    </div>

                    {/* Employee 4 */}
                    <div className='bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border border-pink-200'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold'>
                                    AB
                                </div>
                                <div>
                                    <p className='text-sm font-semibold text-gray-900'>Alice Brown</p>
                                    <p className='text-xs text-gray-600'>Sales</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-2xl font-bold text-pink-600'>5</p>
                                <p className='text-xs text-gray-600'>days</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Summary Card */}
                    <div className='bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border-2 border-gray-300 md:col-span-2 lg:col-span-1'>
                        <div className='flex items-center justify-between h-full'>
                            <div>
                                <p className='text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1'>
                                    Total This Month
                                </p>
                                <p className='text-xs text-gray-500'>4 employees took leave</p>
                            </div>
                            <div className='text-right'>
                                <p className='text-3xl font-bold text-gray-900'>15</p>
                                <p className='text-xs text-gray-600'>total days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveManagement