import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccountType } from "./types";
import { callLoginService } from '../../api/api';

const initialState: UserAccountType = {
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
        loginHandler: (state, action: PayloadAction<UserAccountType>) => {
            try{
                callLoginService({email: action.payload.email, password: action.payload.password});
            } catch (e) {
                console.log(e)
            }
        }
    }
})

export const { getEmail, getPassword, loginHandler } = loginSlice.actions;
export default loginSlice.reducer