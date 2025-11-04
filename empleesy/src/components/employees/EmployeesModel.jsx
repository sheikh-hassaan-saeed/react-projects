import React, { useState, useEffect } from 'react'

const EmployeesModel = ({ isOpen, onClose, employeeData, onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        salary: "",
        department: "",
        joinDate: ""
    })

    useEffect(() => {
        setFormData({
            name: employeeData?.name || "",
            email: employeeData?.email || "",
            salary: employeeData?.salary || "",
            department: employeeData?.department || "",
            joinDate: employeeData?.joinDate || ""
        })
    }, [employeeData])

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(formData) // Send form data to parent
        onClose()        // Close modal
    }



    return (
        <>

            <div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>

                <form className="relative bg-white p-6 border border-blue-600 rounded-lg max-w-lg w-full" onSubmit={handleSubmit}>
                    <button
                        type="button"
                        onClick={onClose}
                        className='absolute top-3 right-3 text-red-700 rounded-full hover:text-black text-xl'
                    >
                        ×
                    </button>

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                placeholder="John Doe"
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
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Monthly Salary <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
                                <input
                                    type="text"
                                    name="salary"
                                    value={formData.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            salary: e.target.value.replace(/,/g, ""), // remove commas for state
                                        })
                                    }
                                    className="w-full pl-8 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                                    placeholder="5,000"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Department <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="department"
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                            >
                                <option value="">Select...</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Marketing">Marketing</option>
                                <option value="HR">Human Resources</option>
                                <option value="Sales">Sales</option>
                                <option value="Finance">Finance</option>
                                <option value="Operations">Operations</option>
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
                                onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 mt-8">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-[30px] hover:bg-gray-50 transition-colors shadow-md font-semibold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-[30px] hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                        >
                            {employeeData ? "Update" : "Add"}
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default EmployeesModel
