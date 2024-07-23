import axios from 'axios';
import {getToken} from "@/utils/token";

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

        if (error.response && error.response.status === 401) {

        }
        return Promise.reject(error);
    }
);

export default api;
