import React from 'react'

const PieChart = ({ employees = [] }) => {


    const departmentCount = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1
        return acc;
    }, [])


    // Example colors for each dept
    const colors = {
        Engineering: "#ef4444",
        Marketing: "#10b981",
        HR: "#facc15",
        Sales: "#3b82f6",
        Operations: "#e36414"
    }

    // Build the conic-gradient string from data
    let start = 0
    const gradientParts = Object.entries(departmentCount).map(([dept, count]) => {
        const percent = (count / employees.length) * 100
        const end = start + percent
        const str = `${colors[dept]} ${start}% ${end}%`
        start = end
        return str
    })

    const gradient = `conic-gradient(${gradientParts.join(",")})`

    return (
        <div className="ml-2 w-[33rem] mx-auto bg-gradient-to-br from-slate-50 to-slate-100 border mt-2 shadow-md rounded-[21px] p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">DEPARTMENT PIE</h2>

            <div className="relative w-40 h-40 mx-auto mb-6">
                <div
                    className="w-40 h-40 rounded-full"
                    style={{ background: gradient }}
                ></div>

                <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center text-gray-600 font-semibold">
                    Pie
                </div>
            </div>

            <div className="flex justify-around text-gray-700 font-semibold text-sm">
                {Object.entries(departmentCount).map(([dept, count]) => (
                    <div className="flex flex-col items-center" key={dept}>
                        <span style={{ color: colors[dept] }}>●</span>
                        <span>{dept}: {count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChart
