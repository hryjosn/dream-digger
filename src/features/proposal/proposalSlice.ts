import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { proposalDataStates } from './proposalType';

const initialState: proposalDataStates = {
    proposalType: '',
    name: '',
    email: '',
    startTime: {
        year: (new Date().getFullYear() + 1).toString(),
        month: '一月',
        day: '1',
        hour: '00',
        minute: '00',
    },
    category: '',
    planName: '',
    planSummary: '',
    coverPhoto: '',
    planIntroduction: '',
    rewardChoiceListType: {
        theFirstOfReward: {
            ammount: '',
            introduction: '',
        },
        theSecondOfReward: {
            ammonut: '',
            introduction: '',
        }
    },
    webLink: '',
    VideoLink: '',
};

export const proposalSlice = createSlice({
    name: 'proposalData',
    initialState,
    reducers: {
        getProposalType: (state, action: PayloadAction<string>) => {
            state.proposalType = action.payload;
        },
        getName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        getEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        getYear: (state, action: PayloadAction<string>) => {
            state.startTime.year = action.payload;
        },
        getMonth: (state, action: PayloadAction<string>) => {
            state.startTime.month = action.payload;
        },
        getDay: (state, action: PayloadAction<string>) => {
            state.startTime.day = action.payload;
        },
        getHour: (state, action: PayloadAction<string>) => {
            state.startTime.hour = action.payload;
        },
        getMinute: (state, action: PayloadAction<string>) => {
            state.startTime.minute = action.payload;
        }
        }
    
    },
);

export const { getYear, getMonth, getDay, getHour, getMinute } = proposalSlice.actions;