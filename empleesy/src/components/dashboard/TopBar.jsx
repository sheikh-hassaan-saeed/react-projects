import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi"
import myPic from '../../assets/circle.png'

const TopBar = () => {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('/profile');
    }

    return (
        <>
            <div className="flex justify-end items-center gap-6 py-1 mt-1 bg-white rounded-xl">

                <div className="flex items-center gap-3 pl-4 pr-8">
                    <img
                        src={myPic}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex leading-tight">
                        <div className='flex flex-col'>
                            <span className="text-[14px] font-semibold text-gray-800">Sheikh Hassaan</span>
                            <span className="text-[10px] text-gray-500 ml-1">Frontend Developer</span>
                        </div>

                        <FiChevronDown
                            size={19}
                            className="text-gray-600 cursor-pointer hover:text-blue-800 transition-colors mt-1 ml-3"
                            onClick={goToProfile}
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-300 w-full mt-2"></div>
        </>
    )
}

export default TopBar