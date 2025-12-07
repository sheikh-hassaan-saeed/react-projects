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
    if (saved) {
      return JSON.parse(saved)
    }
    const employeesWithIds = employeesInformation.map((emp, index) => ({
      id: Date.now() + index,
      ...emp
    }))
    return employeesWithIds
  })

  // ADD THIS: Lift leaveRequests state to App level
  const [leaveRequests, setLeaveRequests] = useState(() => {
    const saved = localStorage.getItem('leaveRequests')
    if (saved) {
      return JSON.parse(saved)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])

  // ADD THIS: Sync leaveRequests to localStorage
  useEffect(() => {
    localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests))
  }, [leaveRequests])

  return (
    <Layout>
      <Routes>
        {/* Pass leaveRequests to Dashboard */}
        <Route path="/" element={<Dashboard employees={employees} leaveRequests={leaveRequests} />} />
        <Route path="/employees" element={<EmployeesData employees={employees} setEmployees={setEmployees} />} />
        {/* Pass leaveRequests and setter to LeaveManagementUI */}
        <Route path='/leave' element={<LeaveManagementUI leaveRequests={leaveRequests} setLeaveRequests={setLeaveRequests} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App