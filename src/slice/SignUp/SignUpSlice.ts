import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { SignUpType } from './SignUpType'

export const initialState: SignUpType = {
    name:'',
    email:'',
    password:'',
    verifyPassword:'',
}
export const SignSlice = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
        getSignUpName:(state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        getSignUpEmail:(state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        getSignUpPassword:(state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        /*verifyPassword:(state, action: PayloadAction<string>) => {
            state.verifyPassword = action.payload
        }*/
    }
})

export const { getSignUpName, getSignUpEmail, getSignUpPassword, /*verifyPassword*/} = SignSlice.actions;
export default SignSlice.reducer