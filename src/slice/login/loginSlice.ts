import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccountType } from './loginType';

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
        getUserAccount: (state, action: PayloadAction<UserAccountType>) => {
            const { email, password } = action.payload.params;
            state.params.email = email;
            state.params.password = password;
        },
        setErrorMsg: (state, action: PayloadAction<string>) => {
            state.errorMsg = action.payload;
        },
    }
});

export const { getUserAccount, setErrorMsg} = loginSlice.actions;
export default loginSlice.reducer
