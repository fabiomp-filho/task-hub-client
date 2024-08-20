
let addNotification = (notification) => {};

export const initNotificationService = (notificationHandler) => {
    addNotification = notificationHandler;
};

export const notify = (notification) => {
    addNotification(notification);
};
