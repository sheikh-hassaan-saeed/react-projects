import React from 'react'
import Logo from './Logo'
import RouteSelect from './RouteSelect'


const Sidebar = () => {
    return (
        <div className="overflow-y-auto mr-2 no-scrollbar sticky flex flex-col top-4 h-[calc(120vh-32px-48px)]">
            <Logo />
            <RouteSelect />
        </div>
    )
}

export default Sidebar