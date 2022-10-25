import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type SignUpState = {
    name: String,
    email: String,
    password: String,
    verifyPassword: String,
}

export const initialState: SignUpState = {
    name:'',
    email:'',
    password:'',
    verifyPassword:'',
}
export const SignSlice = createSlice({
    name: 'SignUp',
    initialState,
    reducers: {
        getSignUpName:(state, action: PayloadAction<string>) =>{
            state.name = action.payload
        },
        getSignUpEmail:(state, action: PayloadAction<string>) =>{
            state.email = action.payload
        },
        getSignUpPassword:(state, action: PayloadAction<string>)=>{
            state.password = action.payload
        },
        verifyPassword:(state, action: PayloadAction<string>) =>{
            state.verifyPassword = action.payload
        }
    }
})

export const { getSignUpName, getSignUpEmail, getSignUpPassword, verifyPassword} = SignSlice.actions