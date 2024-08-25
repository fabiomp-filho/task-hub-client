import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

interface NotificationProps {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    onClose: () => void;
}

const CustomNotification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 320);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        warning: 'bg-yellow-600',
        info: 'bg-blue-600'
    }[type];

    return (
        <div className={`fixed top-4 right-4 z-50 flex items-center p-3 rounded-lg shadow-lg text-white transition-all duration-300 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${bgColor}`}>
            <span>{message}</span>
            <button className="ml-5" onClick={() => setVisible(false)}>
                <FiX />
            </button>
        </div>
    );
};

export default CustomNotification;
