import React from 'react';
import { NavLink } from 'react-router-dom'; 
import Panel from './Panel'

const Navbar = () => {

    const baseClass ="text-blue-900 hover:text-blue-900 cursor-pointer m-2 "
    const activeClass = "text-blue-900 border-b-4 border-blue-900 font-bold decoration-solid m-2"
    
    return (
    <div>
        <Panel className="sticky top-0 flex flex-row items-start w-full pl-4 pr-4 z-[10000] bg-white/70">
            <h1 className="m-2 text-xl">Sunset Pomodoro</h1>
            <div className=" flex flex-grow justify-end">
                <NavLink to="/" className={({isActive})=>(isActive ? activeClass : baseClass)}>
                Home
                </NavLink>  
                <NavLink to="/about" className={({isActive})=>(isActive ? activeClass : baseClass)}>
                About
                </NavLink>
                <NavLink to="/settings" className={({isActive})=>(isActive ? activeClass : baseClass)}>
                Settings
                </NavLink>
            </div>
        </Panel>
    </div>
)
}

export default Navbar
