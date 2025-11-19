import React, { useEffect, useState } from 'react';

const LeaveManagementUI = () => {

    const [leaveRequests, setLeaveRequests] = useState(() => {
        const saved = localStorage.getItem('leaveRequests')
        if (saved) {
            return JSON.parse(saved)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests))
    }, [leaveRequests])

    // Model data
    const [showModal, setShowModal] = useState(false)
    const [newRequest, setNewRequest] = useState({
        employeeName: '',
        employeeEmail: '',
        department: '',
        leaveType: 'Sick Leave',
        startDate: '',
        endDate: '',
        days: 0
    })

    const thisMonthLeaves = leaveRequests.filter(req => {
        const startDate = new Date(req.startDate)
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()
        return req.status === 'approved' &&
            startDate.getMonth() === currentMonth &&
            startDate.getFullYear() === currentYear
    })

    const totalDaysThisMonth = thisMonthLeaves.reduce((sum, req) => sum + req.days, 0)

    // Stats Data
    const stats = {
        total: leaveRequests.length,
        pending: leaveRequests.filter(req => req.status === 'pending').length,
        approved: leaveRequests.filter(req => req.status === 'approved').length,
        rejected: leaveRequests.filter(req => req.status === 'rejected').length,
    }


    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Leave Management</h2>

            {/* Summary Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>

                <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border border-blue-200'>
                    <p className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1'>Total Leaves</p>
                    <h3 className='text-3xl font-bold text-blue-900'>0</h3>
                    <p className='text-xs text-blue-600 mt-2'>All requests</p>
                </div>

                <div className='bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-md border border-yellow-200'>
                    <p className='text-sm font-semibold text-yellow-600 uppercase tracking-wide mb-1'>Pending</p>
                    <h3 className='text-3xl font-bold text-yellow-900'>0</h3>
                    <p className='text-xs text-yellow-600 mt-2'>Awaiting approval</p>
                </div>

                <div className='bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md border border-green-200'>
                    <p className='text-sm font-semibold text-green-600 uppercase tracking-wide mb-1'>Approved</p>
                    <h3 className='text-3xl font-bold text-green-900'>0</h3>
                    <p className='text-xs text-green-600 mt-2'>This month</p>
                </div>

                <div className='bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md border border-red-200'>
                    <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-1'>Rejected</p>
                    <h3 className='text-3xl font-bold text-red-900'>0</h3>
                    <p className='text-xs text-red-600 mt-2'>All time</p>
                </div>
            </div>

            {/* Table */}
            <div className='bg-white rounded-lg shadow-md mb-8 overflow-hidden'>
                <div className='px-6 py-4 border-b border-gray-200 flex items-center justify-between'>
                    <h3 className='text-xl font-bold text-gray-800'>Leave Requests</h3>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-[30px] text-sm font-medium shadow-md'>
                        + New Request
                    </button>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full min-w-[800px]'>
                        <thead className='bg-gradient-to-br from-slate-50 to-slate-100 border-b'>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>Employee</th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>Leave Type</th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>Start Date</th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>End Date</th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>Days</th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>Status</th>
                                <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase'>Actions</th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-gray-200'>
                            <tr>
                                <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                                    No leave requests yet. Add your first request!
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* This Month Summary */}
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-4 flex items-center gap-2'>
                    This Month Summary
                </h3>

                <div className='text-center py-8 text-gray-500'>
                    <p>No approved leaves this month yet.</p>
                </div>
            </div>

            {/* Modal */}
            <div className='hidden'>
                <form className='bg-white p-6 rounded-lg max-w-lg w-full relative'>
                    <h3 className='text-2xl font-bold mb-6 text-gray-800'>New Leave Request</h3>

                    <div className='space-y-4'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Employee Name *
                            </label>
                            <input
                                type='text'
                                className='w-full px-4 py-3 border rounded-lg'
                                placeholder='John Doe'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Employee Email *
                            </label>
                            <input
                                type='email'
                                className='w-full px-4 py-3 border rounded-lg'
                                placeholder='john@example.com'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Department *
                            </label>
                            <select className='w-full px-4 py-3 border rounded-lg'>
                                <option>Select Department</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>HR</option>
                                <option>Sales</option>
                                <option>Finance</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Leave Type *
                            </label>
                            <select className='w-full px-4 py-3 border rounded-lg'>
                                <option>Sick Leave</option>
                                <option>Vacation</option>
                                <option>Personal</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                Start Date *
                            </label>
                            <input type='date' className='w-full px-4 py-3 border rounded-lg' />
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                End Date *
                            </label>
                            <input type='date' className='w-full px-4 py-3 border rounded-lg' />
                        </div>

                        <button className='bg-blue-600 text-white w-full py-3 rounded-lg'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeaveManagementUI;
