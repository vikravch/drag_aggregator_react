import { createSlice, createAsyncThunk, type PayloadAction} from '@reduxjs/toolkit';
import type {Drag} from "../../domain/Drag.ts";
import {repository} from "../../data/SearchDragLocalRepository.ts";

export interface DragState {
    list: Drag[];
    isLoading: boolean;
    error?: string;
}

// Initial state
const initialState: DragState = {
    list: [],
    isLoading: false,
};

// Async thunk to search by name
export const searchByName = createAsyncThunk<Drag[], string>(
    'drag/searchByName',
    async (query, thunkAPI) => {
        try {
            // Replace this with your actual API call
            /*const response = await fetch(`/api/drags?search=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Failed to fetch');
            const data: Drag[] = await response.json();
            return data;*/
            const res = await repository.searchByName(query);
            return res;
        } catch (error) {
            let message = 'Unknown error';
            if (error instanceof Error) {
                message = error.message;
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const dragSlice = createSlice({
    name: 'drag',
    initialState,
    reducers: {
        clearList: (state) => {
            state.list = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchByName.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(searchByName.fulfilled, (state, action: PayloadAction<Drag[]>) => {
                state.list = action.payload;
                state.isLoading = false;
            })
            .addCase(searchByName.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

// Export actions and reducer
export const { clearList } = dragSlice.actions;
export const dragReducer = dragSlice.reducer;
