import React from "react";
import {FiMenu, FiX} from "react-icons/fi";
import {FaBell} from "react-icons/fa";

const Header = ({isOpen, toggleSidebar}) => {
    return (
        <header className="bg-darkgreen shadow-lightgrey shadow text-white p-4 flex justify-between items-center">
            <div
                className={"flex items-center bg-white shadow-lightgrey shadow-lg rounded-2xl border-0 p-1 text-mediumgreen"}>
                <img src="/distribuidor-92.png" alt="Logo" className="align-middle h-8 md:h-12"/>
                <h1 className="md:text-5xl text-3xl">Task Hub</h1>
            </div>
            <div className={"flex items-center gap-4 md:mr-20"}>
                <button title={"Notifications"}
                        className="hover:bg-lightgrey shadow-lightgrey shadow-lg hover:shadow hover:shadow-white transition-all transition-500 p-2 bg-white text-mediumgreen rounded-2xl">
                    <FaBell size={24}/>
                </button>
                <button title={"toggle menu"} onClick={toggleSidebar}
                        className="md:hidden hover:bg-lightgrey shadow-lightgrey shadow-lg hover:shadow hover:shadow-white transition-all transition-500 p-2 bg-white text-mediumgreen rounded-2xl">
                    {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
                </button>
            </div>
        </header>
    )
}

export default Header;