import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import LoginReducer from '../slice/login/loginSlice';
import ProposalReducer from '../slice/proposal/proposalSlice';

export const store = configureStore({
    reducer: {
        userAccount: LoginReducer,
        proposalData: ProposalReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;