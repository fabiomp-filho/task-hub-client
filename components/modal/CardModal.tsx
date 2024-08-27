import React, {FormEvent, useEffect, useState} from 'react';
import {BsFillCreditCard2FrontFill} from 'react-icons/bs';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    listTitle: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         title,
                                         listTitle,
                                         children,
                                     }) => {
    const [show, setShow] = useState(isOpen);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        if (isOpen) {
            setShow(true);
            setNewTitle(title);
        } else {
            const timer = setTimeout(() => setShow(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleTitleClick = () => {
        setIsEditingTitle(true);
    };

    const handleTitleBlur = () => {
        setIsEditingTitle(false);
        console.log(newTitle)

    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setIsEditingTitle(false);
        console.log(newTitle)
    };

    return (
        <div
            className={`fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50 
            transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'} ${show ? 'visible' : 'invisible'}`}>
            <div
                className={`bg-white rounded-2xl shadow-lg max-w-3xl w-full min-h-full md:mx-12 mx-4 transform transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-96'} ${show ? 'visible' : 'invisible'}`}>
                <div className="flex justify-between items-center pt-4 ps-8 pb-2 pr-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex max-w-full gap-4 items-center">
                            <BsFillCreditCard2FrontFill size={22}/>
                            {isEditingTitle ? (

                                <input
                                    type="text"
                                    value={newTitle}
                                    onChange={handleTitleChange}
                                    onBlur={handleTitleBlur}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                                    autoFocus
                                    className="text-xl p-2 max-w-full font-medium rounded-xl outline-mediumgreen bg-iceWhite"
                                />
                            ) : (
                                <h2
                                    onClick={handleTitleClick}
                                    className="text-xl p-2 pointer-events-auto break-all font-medium"
                                >
                                    {newTitle}
                                </h2>
                            )}
                        </div>
                        <p className="text-sm">
                            on column{' '}
                            <span className="underline cursor-pointer">{listTitle}</span>
                        </p>
                    </div>
                    <button
                        title="Close card"
                        onClick={onClose}
                        className="text-4xl text-black hover:text-lightgreyHover"
                    >
                        &times;
                    </button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
