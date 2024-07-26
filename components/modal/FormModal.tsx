import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const FormModal: React.FC<ModalProps> = ({isOpen, onClose, title, form}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-4">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-2xl">{title}</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        &times;
                    </button>
                </div>
                {form}
            </div>
        </div>
    );
};

export default FormModal;