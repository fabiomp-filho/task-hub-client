import React, {useState} from 'react';
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

const CustomLayout = ({children}) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="flex flex-col min-h-screen bg-iceWhite">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar isOpen={isOpen} setIsOpen={toggleSidebar}/>
                {children}
            </div>
            <Footer/>
        </main>
    );
};

export default CustomLayout;
