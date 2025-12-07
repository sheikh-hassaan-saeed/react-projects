import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeaveSummary from '../dashboard/LeaveSummary';

const LeaveManagementUI = ({ leaveRequests, setLeaveRequests }) => {



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

    // Stats Data
    const stats = {
        total: leaveRequests.length,
        pending: leaveRequests.filter(req => req.status === 'pending').length,
        approved: leaveRequests.filter(req => req.status === 'approved').length,
        rejected: leaveRequests.filter(req => req.status === 'rejected').length,
    }

    const thisMonthLeaves = leaveRequests.filter(req => {
        const startDate = new Date(req.startDate)
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()
        return req.status === 'approved' &&
            startDate.getMonth() === currentMonth &&
            startDate.getFullYear() === currentYear
    })

    const totalDaysThisMonth = thisMonthLeaves.reduce((sum, req) => sum + req.days, 0)

    const approveRequest = (id) => {
        setLeaveRequests(leaveRequests.map(req =>
            req.id === id ? { ...req, status: 'approved' } : req
        ))
    }

    const rejectRequest = (id) => {
        const confirmed = window.confirm("Are you sure you want to reject this leave request?")
        if (confirmed) {
            setLeaveRequests(leaveRequests.map(req =>
                req.id === id ? { ...req, status: 'rejected' } : req
            ))
        }
    }

    const deleteRequest = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this request?")
        if (confirmed) {
            setLeaveRequests(leaveRequests.filter(req => req.id !== id))
        }
    }

    const calculateDays = (start, end) => {
        if (!start || !end) return 0
        const startDate = new Date(start)
        const endDate = new Date(end)
        const diffTime = Math.abs(endDate - startDate)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
        return diffDays
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === 'startDate' || name === 'endDate') {
            const updatedRequest = { ...newRequest, [name]: value }
            const days = calculateDays(updatedRequest.startDate, updatedRequest.endDate)
            setNewRequest({ ...updatedRequest, days })
        }
        else {
            setNewRequest({ ...newRequest, [name]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newRequest.employeeName || !newRequest.employeeEmail || !newRequest.department) {
            alert("Please fill all the fields")
            return
        }

        const initials = newRequest.employeeName
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()

        const request = {
            id: Date.now(),
            ...newRequest,
            employeeInitials: initials,
            status: 'pending',
            requestDate: new Date().toISOString().split('T')[0]
        }

        setLeaveRequests([...leaveRequests, request])
        setShowModal(false)

        setNewRequest({
            employeeName: '',
            employeeEmail: '',
            department: '',
            leaveType: 'Sick Leave',
            startDate: '',
            endDate: '',
            days: 0
        })
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-700'
            case 'pending': return 'bg-yellow-100 text-yellow-700'
            case 'rejected': return 'bg-red-100 text-red-700'
            default: return 'bg-gray-100 text-gray-700'
        }
    }

    const getLeaveTypeColor = (type) => {
        switch (type) {
            case 'Sick Leave': return 'bg-purple-100 text-purple-700'
            case 'Vacation': return 'bg-blue-100 text-blue-700'
            case 'Personal': return 'bg-indigo-100 text-indigo-700'
            default: return 'bg-gray-100 text-gray-700'
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    }

    const getAvatarColor = (index) => {
        const colors = ['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500', 'bg-purple-500', 'bg-red-500']
        return colors[index % colors.length]
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    }

    const tableVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.3 }
        }
    }

    const rowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
    }

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', duration: 0.5 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3 }
        }
    }

    const modalBackdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <motion.div
            className='p-6'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h2
                className='text-2xl font-bold mb-6 text-white'
                variants={cardVariants}
            >
                Leave Management
            </motion.h2>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'
                variants={containerVariants}
            >
                {/* Total Leaves Card */}
                <motion.div
                    className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md border border-blue-200'
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1'>
                                Total Leaves
                            </p>
                            <motion.h3
                                className='text-3xl font-bold text-blue-900'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', delay: 0.2 }}
                            >
                                {stats.total}
                            </motion.h3>
                        </div>
                        <div className='bg-blue-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-blue-600 mt-2'>All requests</p>
                </motion.div>

                {/* Pending Requests Card */}
                <motion.div
                    className='bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg shadow-md border border-yellow-200'
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-yellow-600 uppercase tracking-wide mb-1'>
                                Pending
                            </p>
                            <motion.h3
                                className='text-3xl font-bold text-yellow-900'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', delay: 0.3 }}
                            >
                                {stats.pending}
                            </motion.h3>
                        </div>
                        <div className='bg-yellow-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-yellow-600 mt-2'>Awaiting approval</p>
                </motion.div>

                {/* Approved Requests Card */}
                <motion.div
                    className='bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md border border-green-200'
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-green-600 uppercase tracking-wide mb-1'>
                                Approved
                            </p>
                            <motion.h3
                                className='text-3xl font-bold text-green-900'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', delay: 0.4 }}
                            >
                                {stats.approved}
                            </motion.h3>
                        </div>
                        <div className='bg-green-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-green-600 mt-2'>This month</p>
                </motion.div>

                {/* Rejected Requests Card */}
                <motion.div
                    className='bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md border border-red-200'
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-red-600 uppercase tracking-wide mb-1'>
                                Rejected
                            </p>
                            <motion.h3
                                className='text-3xl font-bold text-red-900'
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', delay: 0.5 }}
                            >
                                {stats.rejected}
                            </motion.h3>
                        </div>
                        <div className='bg-red-500 p-3 rounded-full'>
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                            </svg>
                        </div>
                    </div>
                    <p className='text-xs text-red-600 mt-2'>All time</p>
                </motion.div>
            </motion.div>

            {/* LEAVE REQUESTS TABLE */}
            <motion.div
                className='bg-white rounded-lg shadow-md mb-8 overflow-hidden'
                variants={tableVariants}
            >
                <div className='px-6 py-4 border-b border-gray-200 flex items-center justify-between'>
                    <h3 className='text-xl font-bold text-gray-800'>Leave Requests</h3>
                    <motion.button
                        onClick={() => setShowModal(true)}
                        className='bg-blue-600 text-white px-4 py-2 rounded-[30px] hover:bg-blue-700 transition-colors text-sm font-medium shadow-md'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        + New Request
                    </motion.button>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full min-w-[800px]'>
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
                            <AnimatePresence mode='popLayout'>
                                {leaveRequests.length > 0 ? (
                                    leaveRequests.map((request, index) => (
                                        <motion.tr
                                            key={request.id}
                                            className='hover:bg-gray-50 transition-colors'
                                            variants={rowVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            layout
                                            transition={{ duration: 0.3 }}
                                        >
                                            <td className='px-6 py-4'>
                                                <div className='flex items-center'>
                                                    <motion.div
                                                        className={`w-10 h-10 rounded-full ${getAvatarColor(index)} flex items-center justify-center text-white font-bold`}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: 'spring', delay: 0.1 }}
                                                    >
                                                        {request.employeeInitials}
                                                    </motion.div>
                                                    <div className='ml-3'>
                                                        <p className='text-sm font-medium text-gray-900'>{request.employeeName}</p>
                                                        <p className='text-xs text-gray-500'>{request.employeeEmail}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-6 py-4'>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLeaveTypeColor(request.leaveType)}`}>
                                                    {request.leaveType}
                                                </span>
                                            </td>
                                            <td className='px-6 py-4 text-sm text-gray-900'>
                                                {formatDate(request.startDate)}
                                            </td>
                                            <td className='px-6 py-4 text-sm text-gray-900'>
                                                {formatDate(request.endDate)}
                                            </td>
                                            <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                                {request.days} days
                                            </td>
                                            <td className='px-6 py-4'>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(request.status)}`}>
                                                    {request.status === 'approved' && '✓ Approved'}
                                                    {request.status === 'pending' && '⏳ Pending'}
                                                    {request.status === 'rejected' && '✗ Rejected'}
                                                </span>
                                            </td>
                                            <td className='px-6 py-4'>
                                                {request.status === 'pending' ? (
                                                    <div className='flex gap-2'>
                                                        <motion.button
                                                            onClick={() => approveRequest(request.id)}
                                                            className='bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-xs font-medium transition-colors'
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            ✓ Approve
                                                        </motion.button>
                                                        <motion.button
                                                            onClick={() => rejectRequest(request.id)}
                                                            className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-xs font-medium transition-colors'
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            ✗ Reject
                                                        </motion.button>
                                                    </div>
                                                ) : (
                                                    <motion.button
                                                        onClick={() => deleteRequest(request.id)}
                                                        className='text-red-600 hover:text-red-800 text-sm font-medium'
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Delete
                                                    </motion.button>
                                                )}
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    <motion.tr
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                                            No leave requests yet. Add your first request!
                                        </td>
                                    </motion.tr>
                                )}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* MODAL: NEW LEAVE REQUEST */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'
                        onClick={() => setShowModal(false)}
                        variants={modalBackdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <motion.form
                            className='bg-white p-6 rounded-lg max-w-lg w-full relative'
                            onClick={(e) => e.stopPropagation()}
                            onSubmit={handleSubmit}
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.button
                                type='button'
                                className='absolute top-3 right-3 text-red-700 text-2xl hover:text-black'
                                onClick={() => setShowModal(false)}
                                whileHover={{ scale: 1.2, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ×
                            </motion.button>

                            <h3 className='text-2xl font-bold mb-6 text-gray-800'>New Leave Request</h3>

                            <div className='space-y-4'>
                                {/* Employee Name */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Employee Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='employeeName'
                                        value={newRequest.employeeName}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                                        placeholder='John Doe'
                                        required
                                    />
                                </div>

                                {/* Employee Email */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Employee Email <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='email'
                                        name='employeeEmail'
                                        value={newRequest.employeeEmail}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                                        placeholder='john@example.com'
                                        required
                                    />
                                </div>

                                {/* Department */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Department <span className='text-red-500'>*</span>
                                    </label>
                                    <select
                                        name='department'
                                        value={newRequest.department}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                                        required
                                    >
                                        <option value=''>Select Department</option>
                                        <option value='Engineering'>Engineering</option>
                                        <option value='Marketing'>Marketing</option>
                                        <option value='HR'>HR</option>
                                        <option value='Sales'>Sales</option>
                                        <option value='Finance'>Finance</option>
                                    </select>
                                </div>

                                {/* Leave Type */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Leave Type <span className='text-red-500'>*</span>
                                    </label>
                                    <select
                                        name='leaveType'
                                        value={newRequest.leaveType}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                                    >
                                        <option value='Sick Leave'>Sick Leave</option>
                                        <option value='Vacation'>Vacation</option>
                                        <option value='Personal'>Personal</option>
                                    </select>
                                </div>

                                {/* Start Date */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        Start Date <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='date'
                                        name='startDate'
                                        value={newRequest.startDate}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                                        required
                                    />
                                </div>

                                {/* End Date */}
                                <div>
                                    <label className='block text-sm font-semibold text-gray-700 mb-2'>
                                        End Date <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type='date'
                                        name='endDate'
                                        value={newRequest.endDate}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
                                        required
                                    />
                                </div>

                                {/* Days (Auto-calculated) */}
                                <AnimatePresence>
                                    {newRequest.days > 0 && (
                                        <motion.div
                                            className='bg-blue-50 p-3 rounded-lg'
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <p className='text-sm text-blue-700'>
                                                <strong>Total Days:</strong> {newRequest.days} days
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Buttons */}
                            <div className='flex gap-3 mt-6'>
                                <motion.button
                                    type='button'
                                    className='flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-[30px] hover:bg-gray-50 transition-colors font-semibold'
                                    onClick={() => setShowModal(false)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    type='submit'
                                    className='flex-1 px-6 py-3 bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 transition-colors font-semibold shadow-lg'
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Submit Request
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
};

export default LeaveManagementUI;