import React from 'react'

const LeaveSummary = ({ thisMonthLeaves = [], getAvatarColor = (index) => 'bg-gray-500', totalDaysThisMonth = 0 }) => {


    return (
        <>
            {/* SECTION 3: THIS MONTH SUMMARY */}
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                    <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                    </svg>
                    This Month Summary
                </h3>

                {thisMonthLeaves.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {thisMonthLeaves.map((leave, index) => (
                            <div key={leave.id} className='bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <div className={`w-12 h-12 rounded-full ${getAvatarColor(index)} flex items-center justify-center text-white font-bold`}>
                                            {leave.employeeInitials}
                                        </div>
                                        <div>
                                            <p className='text-sm font-semibold text-gray-900'>{leave.employeeName}</p>
                                            <p className='text-xs text-gray-600'>{leave.department}</p>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-2xl font-bold text-blue-600'>{leave.days}</p>
                                        <p className='text-xs text-gray-600'>days</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Total Summary Card */}
                        <div className='bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border-2 border-gray-300'>
                            <div className='flex items-center justify-between h-full'>
                                <div>
                                    <p className='text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1'>
                                        Total This Month
                                    </p>
                                    <p className='text-xs text-gray-500'>{thisMonthLeaves.length} employees took leave</p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-3xl font-bold text-gray-900'>{totalDaysThisMonth}</p>
                                    <p className='text-xs text-gray-600'>total days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='text-center py-8 text-gray-500'>
                        <p>No approved leaves this month yet.</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default LeaveSummary