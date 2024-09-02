import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {FaChevronLeft, FaChevronRight, FaPlus} from "react-icons/fa";
import {BsPeopleFill, BsPersonFillGear} from "react-icons/bs";
import {AiFillHome} from "react-icons/ai";
import CustomButton from "@/components/buttons/CustomButton";
import FormModal from "@/components/modal/FormModal";
import DynamicFormModal from "@/components/form/DynamicFormModal";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import {BoardService} from "@/services/BoardService";
import {useNotification} from "@/components/contexts/NotificationProvider";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {fetchBoards} from "@/store/boardsSlice";
import {fields} from "@/components/pages/board/create";
import {validation} from "@/components/pages/board/validation";

interface MenuItem {
    href: string;
    icon: React.ReactNode;
    label: string;
}

const menu: MenuItem[] = [
    {
        href: "/home",
        icon: <AiFillHome size={24}/>,
        label: "Home",
    },
    {
        href: "/teams",
        icon: <BsPeopleFill size={24}/>,
        label: "Teams",
    },
    {
        href: "/users",
        icon: <BsPersonFillGear size={24}/>,
        label: "Users",
    },
];

const Sidebar = ({isOpen, setIsOpen}) => {

    const {addNotification} = useNotification();
    const router = useRouter();
    const [createModal, setCreateModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const {boards} = useSelector((state: RootState) => state.boards);

    useEffect(() => {
        dispatch(fetchBoards() as any);
    }, [dispatch]);

    const createBoard = (data) => {
        setLoading(true);

        BoardService.createBoardUser(data).then((response) => {
            addNotification({
                message: response,
                type: "success"
            });
            setCreateModal(false);
        }).catch(() => {
        })
            .finally(() => {
                setLoading(false);
                dispatch(fetchBoards() as any);
            })
    }

    return (
        <>
            <aside
                className={`bg-darkgreen h-full text-white text-center transition-all
             ease-linear duration-300 fixed z-50 ${
                    isOpen ? 'md:w-64 w-72' : 'w-2'
                }`}
            >
                <nav className={`flex flex-col gap-4 h-full ${isOpen ? "overflow-y-auto" : ""}`}>
                    <div className={`flex justify-end border-mediumgreenHover items-center`}>
                        {isOpen && (
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 m-2 p-2 rounded-md transform translate-y-2 hover:bg-mediumgreenHover
                             transition-all duration-300 flex justify-center "
                                title={"close sidebar"}
                            >
                                <FaChevronLeft color={"white"} size={16}/>
                            </button>
                        )}
                        {!isOpen && (
                            <button
                                onClick={() => setIsOpen(true)}
                                className="m-2 p-2 bg-mediumgreen transform translate-x-7 translate-y-2 rounded-3xl
                            hover:bg-mediumgreenHover transition-all duration-300 flex justify-center"
                                title={"open sidebar"}
                            >
                                <FaChevronRight color={"white"} size={14}/>
                            </button>
                        )}
                    </div>

                    <ul className={`transition-all duration-100  scrollbar-sidebar md:max-h-52 max-h-32  
                border-b border-mediumgreenHover
                ${isOpen ? 'opacity-100 pointer-events-auto overflow-y-auto' : 'opacity-0 pointer-events-none'}`}>
                        {menu.map((item, index) => (
                            <li
                                key={index}
                                className={`transition-all cursor-pointer duration-300 p-2 block hover:bg-mediumgreenHover 
                            ${router.pathname === item.href
                                && 'bg-mediumdarkHover'
                                }`}
                                title={item.label}
                            >
                                <Link
                                    className={`flex items-center space-x-2 gap-4 ${!isOpen && "d-none"}`}
                                    href={item.href}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={`transition-all duration-200 border-b border-mediumgreen
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                ${isOpen ? "overflow-y-auto" : ""} md:max-h-52 max-h-32  scrollbar-sidebar
                `}>
                        <div className={"flex justify-between items-center ml-2 mb-2 mt-1"}>
                            <h4 className={"text-xl"}>Your Boards</h4>
                            <CustomButton
                                onClick={() => setCreateModal(true)}

                                px={"3"} className={"mr-2"} hoverTitle={"Add new board"}
                                icon={<FaPlus size={14}/>} color="darkgreen" type="button"/>
                        </div>
                        {boards.map((item) => (
                            <li key={item.id}
                                onClick={() => {
                                    router.push(`/board/${item.id}`)
                                }}
                                className={`flex transition-all  cursor-pointer duration-300 p-2 hover:bg-mediumgreenHover
                                 ${!isOpen && "d-none"}`}
                            >{item.name}</li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <FormModal
                isOpen={createModal}
                title={"Create board"}
                form={
                    <DynamicFormModal
                        fields={fields}
                        validationSchema={validation}
                        titleSubmit={"Create"}
                        submitColor={"primary"}
                        onClose={() => setCreateModal(false)}
                        onSubmit={createBoard}
                    />
                }
            />
            {loading && <LoadingSpinner/>}
        </>

    );
};

export default Sidebar;
