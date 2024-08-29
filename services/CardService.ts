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
}