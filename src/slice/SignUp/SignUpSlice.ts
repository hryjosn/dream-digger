import { createSlice, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers} from "@reduxjs/toolkit";
import { SignUpType } from './SignUpType'


const initialState: SignUpType<T> ={
    params: {
        name: '',
        email: '',
        password: '',
    },
    verifyPassword: '',
    setErrorMsg: '',
}

export const SignSlice  = createSlice({
        name: 'sign',
        initialState,
        reducers:{
            getSignUpName:(state: SignUpType<T>, action: PayloadAction<T>) => {
                state.params.name = action.payload
            },
            getSignUpEmail(state: SignUpType<T>, action: PayloadAction<T>) {
                state.params.email = action.payload
            },
            getSignUpPassword(state: SignUpType<T>, action: PayloadAction<T>) {
                state.params.password = action.payload
            },
            verifyPassword(state: SignUpType<T>, action: PayloadAction<T>) {
                state.verifyPassword = action.payload
            },
            setErrorMsg(state: SignUpType<T>, action: PayloadAction<T>) {
                state.setErrorMsg = action.payload;
            },
        },
})

export const { getSignUpName, getSignUpEmail, getSignUpPassword, verifyPassword, setErrorMsg} = SignSlice.actions;
export default SignSlice.reducer