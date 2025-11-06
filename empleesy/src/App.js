import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import EmployeesData from './components/employees/EmployeesData'
import Profile from './components/topbar-page/Profile'
import { useState } from 'react'
function App() {

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", salary: 5000, department: "Engineering", joinDate: "2024-10-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", salary: 4500, department: "Marketing", joinDate: "2024-10-20" },
    { id: 3, name: "Bob Wilson", email: "bob@example.com", salary: 4200, department: "HR", joinDate: "2024-10-25" },
    { id: 4, name: "Alice Blue", email: "alice@example.com", salary: 3800, department: "Engineering", joinDate: "2024-10-02" },
    { id: 5, name: "Sam Andrew", email: "sam@example.com", salary: 4800, department: "Sales", joinDate: "2024-10-14" },
    { id: 6, name: "Austin Hubert", email: "austin@example.com", salary: 2900, department: "HR", joinDate: "2024-10-18" }
  ])

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