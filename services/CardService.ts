import api from "@/services/api";

export const CardService = {

    getCardsByBoardId: async (id) => {
        try {
            const response = await api.get(`api/cards/board/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
}