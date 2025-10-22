import React from 'react'
import { FiBell, FiMessageCircle, FiChevronDown } from "react-icons/fi"
import myPic from '../../assets/circle.png'
const TopBar = () => {
    return (
        <div className="flex justify-end items-center gap-6 px-6 py-2 bg-white shadow-md rounded-xl">

            <div className="flex items-center gap-5 border border-stone-600 py-1 px-3 rounded-[30px] ">
                <FiMessageCircle size={21} className="text-gray-600 cursor-pointer hover:text-blue-800 transition-colors" />
                <FiBell size={21} className="text-gray-600 cursor-pointer hover:text-blue-800 transition-colors" />
            </div>

            <div className="flex items-center gap-3 pl-4 pr-8">
                <img
                    src={myPic}
                    alt="Profile"
                    className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex leading-tight">
                    <div className='flex flex-col'>
                        <span className="text-[15px] font-semibold text-gray-800">Sheikh Hassaan</span>
                        <span className="text-[12px] text-gray-500">Frontend Developer</span>
                    </div>

                    <FiChevronDown size={21} className="text-gray-600 cursor-pointer hover:text-blue-800 transition-colors mt-1 ml-3" />
                </div>
            </div>

        </div>
    )
}

export default TopBar
