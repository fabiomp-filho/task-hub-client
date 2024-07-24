import React from "react";
import {FiMenu, FiX} from "react-icons/fi";

const Header = ({isOpen, toggleSidebar}) => {
    return (
        <header className="bg-darkgreen shadow-lightgrey shadow text-white p-4 flex justify-between items-center">
            <div className={"flex items-center bg-white shadow-lightgrey shadow-lg rounded-xl p-1 text-mediumgreen"}>
                <img src="/distribuidor-92.png" alt="Logo" className="align-middle h-8"/>
                <h1 className="text-2xl">Task Hub</h1>
            </div>
            <button onClick={toggleSidebar} className="md:hidden hover:bg-lightgrey shadow-lightgrey shadow-lg hover:shadow hover:shadow-white transition-all transition-500 p-2 bg-white text-mediumgreen rounded-2xl">
                {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
            </button>
        </header>
    )
}

export default Header;