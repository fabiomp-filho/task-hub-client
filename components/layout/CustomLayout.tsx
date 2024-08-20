import React, {useState} from 'react';
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

const CustomLayout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="flex flex-col min-h-screen bg-iceWhite">
            <Header isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <div className="flex flex-1 overflow-hidden mb-2 mt-2 ">
                <Sidebar isOpen={isOpen}/>
                {children}
            </div>
            <Footer/>
        </main>
    );
};

export default CustomLayout;
