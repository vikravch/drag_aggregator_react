import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Repository from "../../domain/AuthRepository.ts";

interface AuthState {
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    loading: false,
    error: null,
    isAuthenticated: false,
};

// Thunks
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        try {
            await Repository.signIn(email, password);
            console.log('Logged in');
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Login failed');
        }
    }
);

export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async ({ email, password }: { email: string; password: string }, thunkAPI) => {
        try {
            await Repository.register(email, password);
            console.log('Signed up');
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Signup failed');
        }
    }
);

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
        },
    },
    extraReducers: builder => {
        builder
            // Login
            .addCase(loginUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, state => {
                state.loading = false;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Signup
            .addCase(signupUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, state => {
                state.loading = false;
                state.isAuthenticated = true;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
