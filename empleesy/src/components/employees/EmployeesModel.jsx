import React from 'react'
import { useModel } from 'react-model'
const EmployeesModel = () => {
    return (
        <form className="p-6">
            <div className="space-y-5">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all "
                        placeholder="john@example.com"
                    />

                </div>

                {/* Salary Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Monthly Salary <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-3 text-gray-500 font-semibold">$</span>
                        <input
                            type="number"
                            name="salary"
                            className="w-full pl-8 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                            placeholder="5000"
                            min="0"
                        />
                    </div>
                </div>

                {/* Department Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Department <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="department"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
                    >
                        <option value="Engineering">Engineering</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">Human Resources</option>
                        <option value="Sales">Sales</option>
                        <option value="Finance">Finance</option>
                        <option value="Operations">Operations</option>
                    </select>
                </div>

                {/* Join Date Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Join Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        name="joinDate"
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all" />
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 mt-8">
                <button
                    type="button"
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default EmployeesModel