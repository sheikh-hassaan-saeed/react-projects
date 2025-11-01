import React, { useState } from 'react'

const EmployeesData = () => {

    const [employess, setEmployees] = useState([
        { id: 1, name: "John Doe", salary: 5000, joinDate: "2024-10-15" },
        { id: 2, name: "Jane Smith", salary: 4500, joinDate: "2024-10-20" },
        { id: 3, name: "Bob Wilson", salary: 4200, joinDate: "2024-10-25" },
        { id: 4, name: "Alice Blue", salary: 3800, joinDate: "2024-10-02" },
        { id: 5, name: "Sam Andrew", salary: 4800, joinDate: "2024-10-14" },
        { id: 6, name: "Austin Hubert", salary: 2900, joinDate: "2024-10-18" }
    ])

    const removeEntry = (employeeID) => {
        setEmployees(employess.filter(emp => emp.id !== employeeID))

    }


    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Current Employees</h2>


            <div className='overflow-x-auto bg-white rounded-lg shadow'>
                <table className='w-full'>
                    <thead className='bg-gradient-to-br from-slate-50 to-slate-100 border-b'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Name
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Salary
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
                                Hired Date
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>

                            </th>

                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {employess.map((employee) => (
                            <tr key={employee.id} className='hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    {employee.name}
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    ${employee.salary}
                                </td>
                                <td className='px-6 py-4 text-sm text-gray-900'>
                                    {employee.joinDate}
                                </td>
                                <td>
                                    <button className='hover:bg-slate-200 py-1 px-4 rounded-md' onClick={() => removeEntry(employee.id)}>Remove</button>
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