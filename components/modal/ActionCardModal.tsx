import React, {useEffect, useState} from 'react';
import CustomButton from "@/components/buttons/CustomButton";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (
    {
        isOpen,
        onClose,
        title,
        children,
        onSubmit,
        submitColor,
        submitLabel,
    }
) => {

    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            const timer = setTimeout(() => setShow(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-1001 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'} ${show ? 'visible' : 'invisible'}`}>
            <div
                className={`bg-white rounded-lg shadow-lg max-w-3xl w-full md:mx-12 mx-4 transform transition-transform duration-500 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-96'} ${show ? 'visible' : 'invisible'}`}>
                <div className="flex justify-between items-center border-b p-3">
                    <h2 className="text-3xl">{title}</h2>
                    <button title={"Close modal"} onClick={onClose}
                            className="text-4xl text-black hover:text-lightgreyHover">
                        &times;
                    </button>
                </div>
                <div className="mt-4 bg-coolGray-100">
                    {children}
                </div>
                <div className="flex justify-end mt-4 p-2 gap-4">
                    <CustomButton
                        onClick={onClose}
                        color={"secondary"}
                        title={"Close"}
                    />
                    {onSubmit && <CustomButton
                        onClick={onSubmit}
                        color={submitColor}
                        title={submitLabel ?? "Submit"}
                    />}

                </div>
            </div>
        </div>
    );
};

export default Modal;
