import { configureStore } from '@reduxjs/toolkit';
import {dragReducer} from "../features/search/presentation/redux/searchSlice.ts";
import authReducer from "../features/auth/presentation/redux/authSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        drag: dragReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
