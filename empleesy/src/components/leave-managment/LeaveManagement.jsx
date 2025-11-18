import React from 'react'

const LeaveManagement = () => {
    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Leave Management</h2>

            {/* SECTION 1: LEAVE SUMMARY CARDS */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>

                {/* Total Leaves Card */}
                <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-[21px] shadow-md border border-blue-200'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1'>
                                Total Leaves
                            </p>
                            <h3 className='text-3xl font-bold text-blue-900'>12</h3>
                        </div>
                        <div className='bg-blue-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-blue-600 mt-2'>This month</p>
                </div>

                {/* Pending Requests Card */}
                <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-[21px] shadow-md border border-yellow-200'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-yellow-600 uppercase tracking-wide mb-1'>
                                Pending
                            </p>
                            <h3 className='text-3xl font-bold text-yellow-900'>3</h3>
                        </div>
                        <div className='bg-yellow-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-yellow-600 mt-2'>Awaiting approval</p>
                </div>

                {/* Approved Requests Card */}
                <div className='bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-[21px] shadow-md border border-green-200'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-green-600 uppercase tracking-wide mb-1'>
                                Approved
                            </p>
                            <h3 className='text-3xl font-bold text-green-900'>8</h3>
                        </div>
                        <div className='bg-green-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-green-600 mt-2'>This month</p>
                </div>

                {/* Rejected Requests Card */}
                <div className='bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-[21px] shadow-md border border-red-200'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-1'>
                                Rejected
                            </p>
                            <h3 className='text-3xl font-bold text-red-900'>1</h3>
                        </div>
                        <div className='bg-red-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-red-600 mt-2'>This month</p>
                </div>
            </div>

            {/* SECTION 2: LEAVE REQUESTS TABLE */}
            <div className='bg-white rounded-[21px] shadow-md mb-8 overflow-hidden'>
                <div className='px-6 py-4 border-b border-gray-200 flex items-center justify-between'>
                    <h3 className='text-xl font-bold text-gray-800'>Leave Requests</h3>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-[30px] hover:bg-blue-700 transition-colors text-sm font-medium shadow-md'>
                        + New Request
                    </button>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='bg-gradient-to-br from-slate-50 to-slate-100 border-b'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    Employee
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    Leave Type
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    Start Date
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    End Date
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    Days
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    Status
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>

                            {/* Request 1 - Approved */}
                            <tr className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold'>
                                            JD
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-medium text-gray-900'>John Doe</p>
                                            <p className='text-xs text-gray-500'>john@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700'>
                                        Sick Leave
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 15, 2025
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 17, 2025
                                </td>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                    3 days
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700'>
                                        ✓ Approved
                                    </span>
                                </td>
                                <td className='px-6 py-4'>
                                    <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Request 2 - Pending */}
                            <tr className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold'>
                                            JS
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-medium text-gray-900'>Jane Smith</p>
                                            <p className='text-xs text-gray-500'>jane@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700'>
                                        Vacation
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 20, 2025
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 24, 2025
                                </td>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                    5 days
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700'>
                                        ⏳ Pending
                                    </span>
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='flex gap-2'>
                                        <button className='bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-xs font-medium'>
                                            ✓ Approve
                                        </button>
                                        <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-xs font-medium'>
                                            ✗ Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Request 3 - Pending */}
                            <tr className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold'>
                                            BW
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-medium text-gray-900'>Bob Wilson</p>
                                            <p className='text-xs text-gray-500'>bob@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700'>
                                        Personal
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 18, 2025
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 19, 2025
                                </td>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                    2 days
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700'>
                                        ⏳ Pending
                                    </span>
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='flex gap-2'>
                                        <button className='bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-xs font-medium'>
                                            ✓ Approve
                                        </button>
                                        <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-xs font-medium'>
                                            ✗ Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            {/* Request 4 - Approved */}
                            <tr className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold'>
                                            AB
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-medium text-gray-900'>Alice Brown</p>
                                            <p className='text-xs text-gray-500'>alice@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700'>
                                        Vacation
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 10, 2025
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 14, 2025
                                </td>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                    5 days
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700'>
                                        ✓ Approved
                                    </span>
                                </td>
                                <td className='px-6 py-4'>
                                    <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                                        View Details
                                    </button>
                                </td>
                            </tr>

                            {/* Request 5 - Rejected */}
                            <tr className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4'>
                                    <div className='flex items-center'>
                                        <div className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold'>
                                            SA
                                        </div>
                                        <div className='ml-3'>
                                            <p className='text-sm font-medium text-gray-900'>Sam Andrew</p>
                                            <p className='text-xs text-gray-500'>sam@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700'>
                                        Sick Leave
                                    </span>
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 5, 2025
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    Jan 6, 2025
                                </td>
                                <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                    2 days
                                </td>
                                <td className='px-6 py-4'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700'>
                                        ✗ Rejected
                                    </span>
                                </td>
                                <td className='px-6 py-4'>
                                    <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Total Summary Card */}
            <div className='bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-[21px] border-2 border-gray-300 md:col-span-2 lg:col-span-1'>
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

    )
}

export default LeaveManagement