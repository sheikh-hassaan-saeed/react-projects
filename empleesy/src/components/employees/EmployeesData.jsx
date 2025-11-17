import React, { useEffect, useState } from 'react'
import EmployeesModel from './EmployeesModel'
import PieChart from '../dashboard/PieChart'

const EmployeesData = () => {
    const [employees, setEmployees] = useState(() => {
        const saved = localStorage.getItem('employees')
        if (saved) {
            return JSON.parse(saved)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))
    }, [employees])

    const removeEntry = (employeeID) => {
        setEmployees(employees.filter(emp => emp.id !== employeeID))
    }

    const [showModel, setShowModel] = useState(false)
    const [editingEmployees, setEditingEmployees] = useState(null)

    const handleSaveEmployee = (data) => {
        const formattedData = { ...data, salary: Number(data.salary) }

        if (editingEmployees) {
            setEmployees(employees.map(emp =>
                emp.id === editingEmployees.id ? { ...emp, ...formattedData } : emp
            ))
        } else {
            const newEmployee = {
                id: Date.now(),
                ...formattedData
            }
            setEmployees([...employees, newEmployee])
        }
        setShowModel(false)
    }

    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("asc")


    const [itemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)



    const filteredAndSortedEmployees = employees
        .sort((a, b) => sort === "asc" ? a.salary - b.salary : b.salary - a.salary)
        .filter((employee) => {
            return search.toLowerCase() === ''
                ? employee
                : employee.name.toLowerCase().includes(search.toLowerCase())
        })

    //Pagination Calculation
    const totalPages = Math.ceil(filteredAndSortedEmployees.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEmployees = filteredAndSortedEmployees.slice(startIndex, endIndex)

    function goToPage(pageNumber) {
        setCurrentPage(pageNumber)
    }

    function goToNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    function goToPreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Current Employees</h2>

            <div className='flex justify-between mb-6'>
                <input
                    className='w-[40rem] rounded-[30px] border border-slate-500 py-2 px-3'
                    placeholder='Search...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    onClick={() => {
                        setEditingEmployees(null)
                        setShowModel(true)
                    }}
                    className='bg-blue-600 text-white py-2 px-6 rounded-[30px] hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg'
                >
                    + Add Employee
                </button>
            </div>

            <EmployeesModel
                isOpen={showModel}
                onClose={() => setShowModel(false)}
                employeeData={editingEmployees}
                onSave={handleSaveEmployee}
            />

            <div className='overflow-x-auto bg-white rounded-lg shadow'>
                <table className='w-full'>
                    <thead className='bg-gradient-to-br from-slate-50 to-slate-100 border-b'>
                        <tr>
                            <th className='px-8 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Name
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Email
                            </th>
                            <th
                                className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-slate-200'
                                onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
                            >
                                Salary {sort === "asc" ? "▲" : "▼"}
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Department
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Hired Date
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {currentEmployees.length > 0 ? (
                            currentEmployees.map((employee) => (
                                <tr key={employee.id} className='hover:bg-gray-50 transition-colors'>
                                    <td className='px-6 py-4 text-sm text-gray-900'>
                                        {employee.name}
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600'>
                                        {employee.email}
                                    </td>
                                    <td className='px-6 py-4 text-sm font-semibold text-gray-900'>
                                        ${employee.salary.toLocaleString()}
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-600'>
                                        {employee.department}
                                    </td>
                                    <td className='px-6 py-4 text-sm text-gray-900'>
                                        {employee.joinDate}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <button
                                            className='text-blue-600 hover:bg-blue-50 py-1 px-4 rounded-md font-medium mr-2'
                                            onClick={() => {
                                                setEditingEmployees(employee)
                                                setShowModel(true)
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className='text-red-600 hover:bg-red-50 py-1 px-4 rounded-md font-medium'
                                            onClick={() => {
                                                if (window.confirm(`Delete ${employee.name}?`)) {
                                                    removeEntry(employee.id)
                                                }
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                                    {search ? 'No employees found matching your search' : 'No employees yet. Add your first employee!'}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* 🔥 PAGINATION CONTROLS */}
            {filteredAndSortedEmployees.length > 0 && (
                <div className='mt-6 flex items-center justify-between bg-white px-6 py-4 rounded-lg shadow'>

                    {/* Left: Showing info */}
                    <div className='text-sm text-gray-600'>
                        Showing <span className='font-semibold'>{startIndex + 1}</span> to{' '}
                        <span className='font-semibold'>
                            {Math.min(endIndex, filteredAndSortedEmployees.length)}
                        </span>{' '}
                        of <span className='font-semibold'>{filteredAndSortedEmployees.length}</span> employees
                    </div>

                    {/* Right: Page buttons */}
                    <div className='flex items-center gap-2'>
                        {/* Previous button */}
                        <button

                            onClick={goToPreviousPage}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-[31px] font-medium transition-colors ${currentPage === 1
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            Previous
                        </button>

                        {/* Page numbers */}
                        <div className='flex gap-1'>
                            {[...Array(totalPages)].map((_, index) => {
                                const pageNumber = index + 1
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => goToPage(pageNumber)}
                                        className={`px-4 py-2 rounded-[31px] font-medium transition-colors ${currentPage === pageNumber
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Next button */}
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-[31px] font-medium transition-colors ${currentPage === totalPages
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmployeesData