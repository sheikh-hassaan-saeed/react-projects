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

    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Current Employees</h2>
            <div className='flex justify-between'>
                <input
                    className='w-[40rem] rounded-[30px] border border-slate-500 p-3'
                    placeholder='Search...'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    onClick={() => {
                        setEditingEmployees(null)
                        setShowModel(true)
                    }}
                    className='bg-blue-600 text-white px-6 py-2 rounded-[30px] hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg'
                >
                    + Add Employee
                </button>
            </div>

            <div className='flex justify-end mb-6'>
                <EmployeesModel
                    isOpen={showModel}
                    onClose={() => setShowModel(false)}
                    employeeData={editingEmployees}
                    onSave={handleSaveEmployee}
                />
            </div>

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
                                className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer'
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
                        {employees
                            .sort((a, b) => sort === "asc" ? a.salary - b.salary : b.salary - a.salary)
                            .filter((employee) => {
                                return search.toLowerCase() === '' ? employee : employee.name.toLowerCase().includes(search)
                            })
                            .map((employee) => (
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
                                    <td>
                                        <button
                                            className='hover:bg-slate-200 py-1 px-4 rounded-md'
                                            onClick={() => {
                                                setEditingEmployees(employee)
                                                setShowModel(true)
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className='hover:bg-slate-200 py-1 px-4 rounded-md'
                                            onClick={() => removeEntry(employee.id)}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default EmployeesData