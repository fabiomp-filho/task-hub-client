import React from "react";
import {FaBell, FaCog} from "react-icons/fa";
import Link from "next/link";
import {RiLogoutCircleRLine} from "react-icons/ri";

const Header = () => {
    return (
        <header className="bg-mediumgreen p-1.5 text-white flex justify-between items-center border-b border-mediumgreenHover">
            <div
                className={"flex items-center md:ml-8 gap-4"}>
                <img src="/distribuidor-white-92.png" alt="Logo" className="align-middle h-8"/>
                <h1 className=" text-2xl font-medium">Task Hub</h1>
            </div>
            <div className={"flex items-center gap-4 md:mr-20"}>
                <button title={"Notifications"}
                        className="hover:bg-mediumgreenHover hover:shadow hover:shadow-black
                        transition-all duration-500 p-2 bg-mediumgreen text-white rounded-2xl">
                    <FaBell size={16}/>
                </button>

                <li className={`transition-all cursor-pointer hover:shadow hover:shadow-black duration-500 p-2 
                    block rounded-2xl hover:bg-mediumgreenHover bg-mediumgreen text-white `} title={"Configurations"}>
                    <Link href={"/"} >
                        <FaCog size={16} />
                    </Link>
                </li>
                <li className={`transition-all cursor-pointer hover:shadow hover:shadow-black duration-500 p-2 
                    block rounded-2xl hover:bg-mediumgreenHover bg-mediumgreen text-white`} title={"Logout"}>
                    <Link href={"/"} >
                        <RiLogoutCircleRLine  size={18} />
                    </Link>
                </li>
            </div>
        </header>
    )
}

export default Header;