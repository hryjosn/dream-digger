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
    endTime: {
        year: (new Date().getFullYear() + 1).toString(),
        month: '一月',
        day: '1',
        hour: '00',
        minute: '00',
    },
    targetAmount: '',
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
        getStartYear: (state, action: PayloadAction<string>) => {
            state.startTime.year = action.payload;
        },
        getStartMonth: (state, action: PayloadAction<string>) => {
            state.startTime.month = action.payload;
        },
        getStartDay: (state, action: PayloadAction<string>) => {
            state.startTime.day = action.payload;
        },
        getStartHour: (state, action: PayloadAction<string>) => {
            state.startTime.hour = action.payload;
        },
        getStartMinute: (state, action: PayloadAction<string>) => {
            state.startTime.minute = action.payload;
        },
        getEndYear: (state, action: PayloadAction<string>) => {
            state.endTime.year = action.payload;
        },
        getEndMonth: (state, action: PayloadAction<string>) => {
            state.endTime.month = action.payload;
        },
        getEndDay: (state, action: PayloadAction<string>) => {
            state.endTime.day = action.payload;
        },
        getEndHour: (state, action: PayloadAction<string>) => {
            state.endTime.hour = action.payload;
        },
        getEndMinute: (state, action: PayloadAction<string>) => {
            state.endTime.minute = action.payload;
        }
    }    
});

export const { 
        getStartYear, 
        getStartMonth,
        getStartDay, 
        getStartHour, 
        getStartMinute,
        getEndYear,
        getEndMonth,
        getEndDay,
        getEndHour,
        getEndMinute,
    } = proposalSlice.actions;