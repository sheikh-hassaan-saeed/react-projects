import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }

    const profileImageVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    }

    const tableRowVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    }

    return (
        <motion.div
            className='p-6'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                className='bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-lg p-6 m-auto max-w-2xl'
                variants={itemVariants}
            >
                <motion.h1
                    className='text-3xl font-bold mb-2 text-gray-800'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Profile
                </motion.h1>
                <hr />

                <motion.div
                    className='flex items-center gap-6 mb-6 mt-4'
                    variants={itemVariants}
                >
                    <motion.img
                        src={myPic}
                        alt="Profile"
                        className='w-24 h-24 rounded-full object-cover border-4 border-blue-500'
                        variants={profileImageVariants}
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 }
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {/* 🔥 STEP 4: Display data from state */}
                        <h2 className='text-2xl font-semibold text-gray-800'>{profileData.name}</h2>
                        <p className='text-gray-600'>{profileData.role}</p>
                    </motion.div>
                </motion.div>

                <motion.table
                    className='w-full'
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.4
                            }
                        }
                    }}
                >
                    <tbody>
                        <motion.tr
                            className='border-b'
                            variants={tableRowVariants}
                        >
                            <td className='py-3 text-sm font-semibold text-gray-600'>Email:</td>
                            <td className='py-3 text-gray-800'>{profileData.email}</td>
                        </motion.tr>

                        <motion.tr
                            className='border-b'
                            variants={tableRowVariants}
                        >
                            <td className='py-3 text-sm font-semibold text-gray-600'>Phone:</td>
                            <td className='py-3 text-gray-800'>{profileData.phone}</td>
                        </motion.tr>

                        <motion.tr
                            className='border-b'
                            variants={tableRowVariants}
                        >
                            <td className='py-3 text-sm font-semibold text-gray-600'>Department:</td>
                            <td className='py-3 text-gray-800'>{profileData.department}</td>
                        </motion.tr>

                        <motion.tr
                            className='border-b'
                            variants={tableRowVariants}
                        >
                            <td className='py-3 text-sm font-semibold text-gray-600'>Employee ID:</td>
                            <td className='py-3 text-gray-800'>{profileData.employeeId}</td>
                        </motion.tr>

                        <motion.tr
                            variants={tableRowVariants}
                        >
                            <td className='py-3 text-sm font-semibold text-gray-600'>Joined Date:</td>
                            <td className='py-3 text-gray-800'>
                                {new Date(profileData.joinDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </td>
                        </motion.tr>
                    </tbody>
                </motion.table>

                {/* 🔥 STEP 2: Pass data and save function to modal */}
                <ProfileModel
                    isOpen={showModel}
                    onClose={() => setShowModel(false)}
                    profileData={profileData}
                    onSave={handleSaveProfile}
                />

                <motion.div
                    className='mt-6 flex justify-end gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <motion.button
                        className='bg-blue-700 text-white px-6 py-2 rounded-[30px] hover:bg-blue-900 transition-colors shadow-lg'
                        onClick={() => setShowModel(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Edit Profile
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Profile