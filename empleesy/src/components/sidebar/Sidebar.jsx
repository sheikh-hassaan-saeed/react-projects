import React from 'react'
import Logo from './Logo'
import RouteSelect from './RouteSelect'
import BottonPanel from './BottonPanel'


const Sidebar = () => {
    return (
        <div className="overflow-y-auto mr-4 no-scrollbar sticky flex flex-col  fixed top-4 h-[calc(120vh-32px-48px)]">
            <Logo />
            <RouteSelect />
            <BottonPanel />
        </div>
    )
}

export default Sidebar