import React, { useState, useEffect } from 'react'

const ProfileModel = ({ isOpen, onClose, profileData, onSave }) => {
    // 🔥 Initialize with current profile data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "",
        employeeId: "",
        joinDate: ""
    })

    // 🔥 Pre-fill form when modal opens
    useEffect(() => {
        if (profileData) {
            setFormData({
                name: profileData.name,
                email: profileData.email,
                department: profileData.department,
                employeeId: profileData.employeeId,
                joinDate: profileData.joinDate
            })
        }
    }, [profileData, isOpen])

    if (!isOpen) return null

    // 🔥 Handle input changes correctly
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // 🔥 Submit updates
    function handleSubmit(e) {
        e.preventDefault()
        onSave(formData)  // Send data to parent
    }

    return (
        <>
            <div
                className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'
                onClick={onClose}  // Close when clicking outside
            >
                <form
                    className="relative bg-white p-6 border border-blue-600 rounded-lg max-w-lg w-full"
                    onSubmit={handleSubmit}
                    onClick={(e) => e.stopPropagation()}  // Don't close when clicking form
                >
                    <button
                        type="button"
                        className='absolute top-3 right-3 text-red-700 rounded-full hover:text-black text-xl'
                        onClick={onClose}
                    >
                        ×
                    </button>

                    <h2 className='text-2xl font-bold mb-6 text-gray-800'>Edit Profile</h2>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                placeholder="John Doe"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                placeholder="john@example.com"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Employee ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="employeeId"
                                value={formData.employeeId}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                placeholder="EMP-001"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Department <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="department"
                                value={formData.department}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                onChange={handleChange}
                                required
                            >
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="HR">HR</option>
                                <option value="Sales">Sales</option>
                                <option value="Finance">Finance</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Join Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="joinDate"
                                value={formData.joinDate}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                        <button
                            type="button"
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-[30px] hover:bg-gray-50 transition-colors shadow-md font-semibold"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfileModel