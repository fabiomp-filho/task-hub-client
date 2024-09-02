import axios from 'axios';
import {getToken} from "@/utils/token";
import {notify} from "@/components/notification/NotificationService";
import Router from 'next/router';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

api.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers.Authorization = `Bearer ${getToken()}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (!error.response) {
            notify({
                message: "Unable to reach the server. Please check your internet connection or try again later.",
                type: "error",
            });
        } else {
            const {status, data} = error.response;

            if (status === 401) {
                notify({
                    message: "Your session has expired. Please log in again.",
                    type: "error",
                });
                Router.push('/')

            } else if (status === 400) {
                if (data) {
                    if (Array.isArray(data)) {
                        data.forEach(errorMessage => {
                            notify({
                                message: errorMessage,
                                type: "error",
                            });
                        });
                    } else if (typeof data === 'object') {
                        Object.values(data).forEach(errorMessage => {
                            notify({
                                message: errorMessage,
                                type: "error",
                            });
                        });
                    } else {
                        notify({
                            message: data || "An error occurred.",
                            type: "error",
                        });
                    }
                } else {
                    notify({
                        message: "Resource not found.",
                        type: "error",
                    });
                }
            } else if (data) {
                notify({
                    message: data || "An error occurred.",
                    type: "error",
                });
            } else {
                notify({
                    message: "An unexpected error occurred.",
                    type: "error",
                });
            }
        }
        return Promise.reject(error);
    }
);

export default api;
