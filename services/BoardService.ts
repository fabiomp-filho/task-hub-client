import api from "@/services/api";

export const BoardService = {
    createBoardUser: async (request) => {
        try {
            const response = await api.post(`api/boards/user`, request);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllBoards: async () => {
        try {
            const response = await api.get(`api/boards`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
    getBoardById: async (id) => {
        try {
            const response = await api.get(`api/boards/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    },
}