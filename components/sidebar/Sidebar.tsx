import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiFillHome} from "react-icons/ai";
import {BiExit} from "react-icons/bi";
import {FaCog} from "react-icons/fa";
import {BsPeopleFill, BsPersonFillGear} from "react-icons/bs";

interface MenuItem {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const menu: MenuItem[] = [
    {
        href: "/home",
        icon: <AiFillHome size={24} />,
        label: "Home",
    },
    {
        href: "/about",
        icon: <BsPeopleFill size={24} />,
        label: "About",
    },
    {
        href: "/users",
        icon: <BsPersonFillGear size={24} />,
        label: "Manage Users",
    },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
    const router = useRouter();

    return (
        <aside
            className={`bg-darkgreen shadow-lightgrey shadow text-white rounded-r-3xl text-center transition-all duration-300 fixed md:relative md:h-auto h-96 z-1000 overflow-hidden ${
                isOpen ? 'max-w-20' : 'max-w-0 md:max-w-40'
            }`}
        >
            <nav className="flex flex-col">
                <ul className="p-3">
                    {menu.map((item, index) => (
                        <li
                            key={index}
                            className={`transition-all cursor-pointer hover:shadow hover:shadow-white duration-500 p-2 block mt-5 rounded-2xl hover:bg-lightgreyHover ${
                                router.pathname === item.href
                                    ? 'bg-lightgrey text-mediumgreen shadow-white shadow'
                                    : 'bg-white text-mediumgreen shadow-lg shadow-black'
                            }`}
                            title={item.label}
                        >
                            <Link className="flex items-center justify-center space-x-2" href={item.href}>
                                {item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="p-3 absolute bottom-0">

                    <li className={`mt-2 transition-all cursor-pointer hover:shadow hover:shadow-white duration-500 p-2 
                    block rounded-2xl hover:bg-lightgreyHover bg-white text-mediumgreen shadow-lg shadow-black `}>
                        <Link href={"/"} title={"Configurations"}>
                            <FaCog size={24} />
                        </Link>
                    </li>
                    <li className={`mt-2 transition-all cursor-pointer hover:shadow hover:shadow-white duration-500 p-2 
                    block rounded-2xl hover:bg-lightgreyHover bg-white text-mediumgreen shadow-lg shadow-black `}>
                        <Link href={"/"} title={"Logout"}>
                            <BiExit size={24} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
