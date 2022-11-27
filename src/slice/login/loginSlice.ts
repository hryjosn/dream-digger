import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccountType } from "./types";

const initialState: UserAccountType = {
    params: {
        email: '',
        password: '',
    },
    errorMsg: '',
};

const loginSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        getEmail: (state, action: PayloadAction<string>) => {
            state.params.email = action.payload;
        },
        getPassword: (state, action: PayloadAction<string>) => {
            state.params.password = action.payload;
        },
        setErrorMsg: (state, action: PayloadAction<string>) => {
            state.errorMsg = action.payload;
        },
    }
})

export const { getEmail, getPassword, setErrorMsg } = loginSlice.actions;
export default loginSlice.reducer