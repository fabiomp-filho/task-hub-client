import api from "@/services/api";

export const CardService = {

    createCard: async (request) => {
        try {
            const response = await api.post(`api/cards`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateTitle: async (request, id) => {
        try {
            const response = await api.put(`api/cards/${id}/name`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateDescription: async (request, id) => {
        try {
            const response = await api.put(`api/cards/${id}/description`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteCard: async (id) => {
        try {
            const response = await api.delete(`api/cards/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
}