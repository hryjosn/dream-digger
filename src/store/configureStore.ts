import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { setupListeners } from '@reduxjs/toolkit/query'

import SignReducer from "../slice/SignUp/SignUpSlice";
import ProposalReducer from '../slice/proposal/proposalSlice';
import LoginReducer from '../slice/login/loginSlice';
import userApiReducer, { userApi } from '../apiSlice/userApi/userApiSlice';

export const store = configureStore({
    reducer: {
        userAccount: LoginReducer,
        proposalData: ProposalReducer,
        userApi: userApiReducer,
        SignUpData: SignReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
