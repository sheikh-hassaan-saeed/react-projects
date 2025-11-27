import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import EmployeesData from './components/employees/EmployeesData'
import Profile from './components/topbar-page/Profile'
import { useState, useEffect } from 'react'
import LeaveManagementUI from './components/leave-managment/LeaveManagement'
import employeesInformation from '../src/data/employeesInfo'

function App() {

  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees')

    console.log('Saved data:', saved) // Debug log
    console.log('Imported data:', employeesInformation) // Debug log

    if (saved) {
      return JSON.parse(saved)
    }

    const employeesWithIds = employeesInformation.map((emp, index) => ({
      id: Date.now() + index,
      ...emp
    }))

    console.log('Employees with IDs:', employeesWithIds) // Debug log
    return employeesWithIds
  })

  useEffect(() => {
    alert("It is recommended to open this on a desktop/laptop as it will cause responsive issues on mobile screens")

  }, [])
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))

  }, [employees])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard employees={employees} />} />
        <Route path="/employees" element={<EmployeesData employees={employees} setEmployees={setEmployees} />} />
        <Route path='/leave' element={<LeaveManagementUI />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App