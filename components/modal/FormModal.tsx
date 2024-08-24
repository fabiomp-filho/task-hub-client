import React, {useEffect, useState} from 'react';
import DynamicFormModal from "@/components/form/DynamicFormModal";

interface ModalProps {
    isOpen: boolean;
    form: DynamicFormModal;
    title: string;
}

const FormModal: React.FC<ModalProps> = ({isOpen, title, form}) => {
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            const timer = setTimeout(() => setShow(false), 500); // Match the duration with your transition duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-1001 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300  ${isOpen ? 'opacity-100 ease-in' : 'opacity-0 ease-out'} ${show ? 'visible' : 'invisible'}`}>
            <div
                className={`bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 md:mx-12 mx-4 transform transition-transform duration-300  ${isOpen ? 'translate-y-0 ease-in' : 'translate-y-96 ease-out'} ${show ? 'visible' : 'invisible'}`}>
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-2xl">{title}</h2>
                </div>
                {form}
            </div>
        </div>
    );
};

export default FormModal;