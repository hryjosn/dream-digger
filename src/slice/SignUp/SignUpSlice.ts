import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { SignUpType } from './SignUpType'

export const initialState: SignUpType = {
    params: {
        name:'',
        email:'',
        password:'',
    },
    verifyPassword:'',
    setErrorMsg: '',
}
export const SignSlice = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
        getSignUpName:(state, action: PayloadAction<string>) => {
            state.params.name = action.payload
        },
        getSignUpEmail:(state, action: PayloadAction<string>) => {
            state.params.email = action.payload
        },
        getSignUpPassword:(state, action: PayloadAction<string>) => {
            state.params.password = action.payload
        },
        verifyPassword:(state, action: PayloadAction<string>) => {
            state.verifyPassword = action.payload
        },
        setErrorMsg: (state, action: PayloadAction<string>) =>{
            state.setErrorMsg= action.payload
        }
    }
})

export const { getSignUpName, getSignUpEmail, getSignUpPassword, verifyPassword, setErrorMsg} = SignSlice.actions;
export default SignSlice.reducer