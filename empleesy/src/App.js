import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import EmployeesData from './components/employees/EmployeesData'
import Profile from './components/topbar-page/Profile'
import { useState, useEffect } from 'react'
function App() {

  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees')
    if (saved) {
      return JSON.parse(saved)
    }

  })
  useEffect(() => {
    localStorage.setItem('employeeData', employees)
  }, [employees])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard employees={employees} />} />
        <Route path="/employees" element={<EmployeesData employees={employees} setEmployees={setEmployees} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App