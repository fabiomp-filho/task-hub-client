import api from "./api";

export const UserService = {

    getAllUsers: async (page, size) => {
        try {
            const response = await api.get(`api/people?page=${page}&size=${size}`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    createUser: async (request) => {
        try {
            const response = await api.post(`api/people/register`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateUser: async (request, id) => {
        try {
            const response = await api.put(`api/people/${id}`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    getUserById: async (id) => {
        try {
            const response = await api.get(`api/people/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteUser: async (id) => {
        try {
            const response = await api.delete(`api/people/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
};
