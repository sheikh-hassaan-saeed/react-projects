import React from 'react'

const Profile = () => {
    return (
        <div className='p-6'>
            <h1 className='text-3xl font-bold mb-6 text-gray-800'>Profile</h1>

            <div className='bg-white rounded-lg shadow p-6 max-w-2xl'>
                <div className='flex items-center gap-6 mb-6'>
                    <img
                        src="/src/assets/circle.png"
                        alt="Profile"
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-800'>Sheikh Hassaan</h2>
                        <p className='text-gray-600'>Frontend Developer</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <div>
                        <label className='text-sm font-semibold text-gray-600'>Email</label>
                        <p className='text-gray-800'>sheikh.hassaan@example.com</p>
                    </div>

                    <div>
                        <label className='text-sm font-semibold text-gray-600'>Phone</label>
                        <p className='text-gray-800'>+92 300 1234567</p>
                    </div>

                    <div>
                        <label className='text-sm font-semibold text-gray-600'>Department</label>
                        <p className='text-gray-800'>Engineering</p>
                    </div>

                    <div>
                        <label className='text-sm font-semibold text-gray-600'>Employee ID</label>
                        <p className='text-gray-800'>EMP-001</p>
                    </div>

                    <div>
                        <label className='text-sm font-semibold text-gray-600'>Joined Date</label>
                        <p className='text-gray-800'>January 15, 2024</p>
                    </div>
                </div>

                <div className='mt-6 flex gap-4'>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                        Edit Profile
                    </button>
                    <button className='bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors'>
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile