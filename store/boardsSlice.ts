// src/store/boardsSlice.ts
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {BoardService} from "@/services/BoardService";


interface Board {
    id: string;
    name: string;
    description: string;
}

interface BoardsState {
    boards: Board[];
    loading: boolean;
    error: string | null;
}


const initialState: BoardsState = {
    boards: [],
    loading: false,
    error: null,
};

export const fetchBoards = createAsyncThunk<Board[]>('boards/fetchBoards', async (_, {rejectWithValue}) => {
    return await BoardService.getAllBoards();
});

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        setBoards(state, action: PayloadAction<Board[]>) {
            state.boards = action.payload;
        },
        addBoard(state, action: PayloadAction<Board>) {
            state.boards.push(action.payload);
        },
        removeBoard(state, action: PayloadAction<string>) {
            state.boards = state.boards.filter(board => board.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBoards.pending, (state: BoardsState) => {
                state.loading = true;
            })
            .addCase(fetchBoards.fulfilled, (state: BoardsState, action: PayloadAction<Board[]>) => {
                state.loading = false;
                state.boards = action.payload
            })
            .addCase(fetchBoards.rejected, (state: BoardsState, action) => {
                state.loading = false;
            });
    },
});

export const {setBoards, addBoard, removeBoard} = boardsSlice.actions;
export const selectBoards = (state: RootState) => state.boards.boards;
export default boardsSlice.reducer;
