import React, { useState } from 'react'
import { FiHelpCircle, FiSettings } from "react-icons/fi"
const BottonPanel = () => {

    const [activeLinks, setActiveLinks] = useState(null)

    const links = [
        { name: "Help", icon: <FiHelpCircle size={19} /> },
        { name: "Settings", icon: <FiSettings size={19} /> }
    ]

    return (
        <div className="flex flex-col gap-4 mt-auto ml-9 mb-4">
            {links.map((link, index) => (
                <h3
                    key={index}
                    className={`flex items-center gap-2 text-stone-700 text-[12px] font-semibold cursor-pointer
            ${activeLinks === index ? "text-blue-900" : "text-stone-700"}`}
                >
                    {link.icon}
                    {link.name}
                </h3>
            ))}
        </div>
    )
}

export default BottonPanel