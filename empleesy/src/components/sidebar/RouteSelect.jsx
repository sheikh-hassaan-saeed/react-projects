import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'
import { FaUsers, FaMoneyBillWave, FaRegCalendarCheck } from 'react-icons/fa'

const RouteSelect = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const links = [
        { name: 'Dashboard', icon: <MdDashboard size={19} />, path: '/' },
        { name: 'Employees', icon: <FaUsers size={19} />, path: '/employees' },
        { name: 'Leave Management', icon: <FaRegCalendarCheck size={19} />, path: '/leave' },
    ];

    const handleClick = (index, path) => {
        console.log("🔥 Clicked:", path);
        setActiveIndex(index);
        navigate(path);
    };

    return (
        <div className="flex flex-col ml-6 mt-12 gap-2">
            {links.map((link, index) => (
                <div
                    key={index}
                    onClick={() => handleClick(index, link.path)}
                    className={`flex items-center gap-3 cursor-pointer text-[11px] text-stone-700 font-medium hover:text-stone-900 transition-colors px-4 py-2 rounded-lg w-[180px] text-left ${activeIndex === index
                        ? "bg-[#ffffff] text-stone-700 shadow-md"
                        : "text-stone-500 hover:text-stone-700 hover:bg-white"
                        }`}
                >
                    <span className="bg-transparent text-stone-800">{link.icon}</span>
                    <span className='bg-transparent'>{link.name}</span>
                </div>
            ))}
        </div>
    )
}

export default RouteSelect