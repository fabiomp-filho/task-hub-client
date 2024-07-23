import api from "./api";

export const AuthService = {
    login: async (request) => {
        try {
            const response = await api.post(`login`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
};