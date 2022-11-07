import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserAccountStates = {
    email: string,
    password: string,
}

const initialState: UserAccountStates = {
    email: '',
    password: '',
};

const loginSlice = createSlice({
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
})

export const { getEmail, getPassword } = loginSlice.actions;
export default loginSlice.reducer