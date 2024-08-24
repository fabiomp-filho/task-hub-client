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
}