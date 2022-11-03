import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccountStates } from './loginType';

const initialState: UserAccountStates = {
    email: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        getEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        getPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    }
});

export const { getEmail, getPassword } = loginSlice.actions;