import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './components/dashboard/Dashboard'
import EmployeesData from './components/employees/EmployeesData'
import Profile from './components/topbar-page/Profile'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeesData />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App