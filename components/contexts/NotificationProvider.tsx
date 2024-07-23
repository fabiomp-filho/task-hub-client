import React, { createContext, useContext, useState, ReactNode } from 'react';
import CustomNotification from '@/components/notification/Notification';

interface Notification {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

interface NotificationContextProps {
    addNotification: (notification: Notification) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = (): NotificationContextProps => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        setNotifications([...notifications, notification]);
    };

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div id="notification-container">
                {notifications.map((notification, index) => (
                    <CustomNotification
                        key={index}
                        message={notification.message}
                        type={notification.type}
                        onClose={() => {
                            setNotifications(notifications.filter((_, i) => i !== index));
                        }}
                    />
                ))}
            </div>
        </NotificationContext.Provider>
    );
};
