import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";

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
        icon: <AiFillHome size={24} />,
        label: "About",
    },
    {
        href: "/contact",
        icon: <AiFillHome size={24} />,
        label: "Contact",
    },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
    const router = useRouter();

    console.log(router.pathname === menu[0].href)
    return (
        <aside
            className={`bg-darkgreen shadow-lightgrey shadow text-white rounded-r-3xl text-center transition-all duration-300 fixed md:relative z-40 h-full md:h-auto overflow-hidden ${
                isOpen ? 'max-w-20' : 'max-w-0 md:max-w-40'
            }`}
        >
            <nav>
                <ul className="p-3">
                    {menu.map((item, index) => (
                        <li
                            key={index}
                            className={`transition-all cursor-pointer hover:shadow hover:shadow-white duration-500 p-2 block mt-5 rounded-2xl  hover:bg-lightgreyHover ${
                                router.pathname === item.href
                                    ? 'bg-lightgrey text-mediumgreen shadow-white shadow'
                                    : 'bg-white text-mediumgreen shadow-lg shadow-black'
                            }`}
                            title={item.label}
                        >
                            <Link  href={item.href}>
                                {item.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {isOpen && (
                <div
                    className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 bg-darkgreen p-2 rounded-full">
                    <span className="text-white">&rarr;</span> {/* Arrow pointing right */}
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
