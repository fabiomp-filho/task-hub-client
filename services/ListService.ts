import api from "@/services/api";

export const ListService = {

    createList: async (request) => {
        try {
            const response = await api.post(`api/tasklists`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },

}