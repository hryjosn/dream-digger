import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store/configureStore';

type UserAccountStates = {
    email: String,
    password: String,
}

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
})

export const { getEmail, getPassword } = loginSlice.actions;
// export const selectCount = (state: RootState) => {
//     state.userAccount.email
//     state.userAccount.password
// };