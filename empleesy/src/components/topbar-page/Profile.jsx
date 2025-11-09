import React, { useState } from 'react'
import myPic from '../../assets/circle.png'
import ProfileModel from './ProfileModel'
const Profile = () => {

    const [showModel, setShowModel] = useState(false)

    return (
        <div className='p-6'>


            <div className='bg-gray-100 rounded-lg shadow-lg p-6 m-auto max-w-2xl'>
                <h1 className='text-3xl font-bold mb-2 text-gray-800'>Profile</h1>
                <hr />
                <div className='flex items-center gap-6 mb-6 mt-4'>
                    <img
                        src={myPic}
                        alt="Profile"
                        className='w-24 h-24 rounded-full object-cover'
                    />
                    <div>
                        <h2 className='text-2xl font-semibold text-gray-800'>Sheikh Hassaan</h2>
                        <p className='text-gray-600'>Frontend Developer</p>
                    </div>
                </div>

                <table className='w-full'>
                    <tbody>
                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Email:</td>
                            <td className='py-3 text-gray-800'>sheikh.hassaan@example.com</td>
                        </tr>

                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Phone:</td>
                            <td className='py-3 text-gray-800'>+92 300 1234567</td>
                        </tr>

                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Department:</td>
                            <td className='py-3 text-gray-800'>Engineering</td>
                        </tr>

                        <tr className='border-b'>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Employee ID:</td>
                            <td className='py-3 text-gray-800'>EMP-001</td>
                        </tr>

                        <tr>
                            <td className='py-3 text-sm font-semibold text-gray-600'>Joined Date:</td>
                            <td className='py-3 text-gray-800'>January 15, 2024</td>
                        </tr>
                    </tbody>
                </table>

                <ProfileModel
                    isOpen={showModel}
                    onClose={() => setShowModel(false)}

                />

                <div className='mt-6 flex justify-end gap-4'>
                    <button className='bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors' onClick={() => setShowModel(true)}>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile