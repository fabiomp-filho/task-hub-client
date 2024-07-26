import api from "./api";

export const UserService = {
    login: async (request) => {
        try {
            const response = await api.post(`api/people`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
};
