import { useEffect, useState } from 'react'
import myPic from '../../assets/circle.png'
import ProfileModel from './ProfileModel'

const Profile = () => {
    const [showModel, setShowModel] = useState(false)

    // 🔥 STEP 1: Create state for profile data
    const [profileData, setProfileData] = useState(() => {
        const saved = localStorage.getItem('profile')
        if (saved) return JSON.parse(saved)
        return {
            name: "Sheikh Hassaan",
            email: "sheikh.hassaan@example.com",
            phone: "+92 300 1234567",
            department: "Engineering",
            employeeId: "EMP-001",
            joinDate: "2024-01-15",
            role: "Frontend Developer"
        }
    })

    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profileData))
    }, [profileData])

    // 🔥 STEP 3: Function to update profile
    const handleSaveProfile = (newData) => {
        setProfileData({ ...profileData, ...newData })
        setShowModel(false)
    }

    return (
        <div className='p-6'>
            <div className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-lg p-6 m-auto max-w-2xl'>
                <h1 className='text-3xl font-bold mb-2 text-gray-800'>Profile</h1>
                <hr />

                <div className='flex items-center gap-6 mb-6 mt-4'>
                    <img
                        src={myPic}
                        alt="Profile"
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <div>
                        {/* 🔥 STEP 4: Display data from state */}
                        <h2 className='text-2xl font-semibold text-gray-800'>{profileData.name}</h2>
                        <p className='text-gray-600'>{profileData.role}</p>
                    </div>
                </div>

                <table className='w-full'>
                    <tbody>
                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Email:</td>
                            <td className='py-3 text-gray-800'>{profileData.email}</td>
                        </tr>

                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Phone:</td>
                            <td className='py-3 text-gray-800'>{profileData.phone}</td>
                        </tr>

                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Department:</td>
                            <td className='py-3 text-gray-800'>{profileData.department}</td>
                        </tr>

                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Employee ID:</td>
                            <td className='py-3 text-gray-800'>{profileData.employeeId}</td>
                        </tr>

                        <tr>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Joined Date:</td>
                            <td className='py-3 text-gray-800'>
                                {new Date(profileData.joinDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* 🔥 STEP 2: Pass data and save function to modal */}
                <ProfileModel
                    isOpen={showModel}
                    onClose={() => setShowModel(false)}
                    profileData={profileData}
                    onSave={handleSaveProfile}
                />

                <div className='mt-6 flex justify-end gap-4'>
                    <button
                        className='bg-blue-700 text-white px-6 py-2 rounded-[30px] hover:bg-blue-900 transition-colors'
                        onClick={() => setShowModel(true)}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile