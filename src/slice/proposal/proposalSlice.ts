import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { proposalDataStates } from './proposalType';

const initialState: proposalDataStates = {
    params: {
        //提案類型
        proposalType: '群眾集資' || '預購式專案' || '訂閱式專案',
        //真實名稱
        name: '',
        //信箱
        email: '',
        //預計開始時間
        startTime: {
            year: (new Date().getFullYear() + 1).toString(),
            month: '一月',
            day: '1',
            hour: '00',
            minute: '00',
        },
        //預計結束時間
        endTime: {
            year: (new Date().getFullYear() + 1).toString(),
            month: '一月',
            day: '1',
            hour: '00',
            minute: '00',
        },
        //計畫目標(金額)
        targetAmount: '',
        //分類
        category: '',
        //計畫名稱
        planName: '',
        //計畫簡介
        planSummary: '',
        //封面照片
        coverPhoto: '',
        //計畫說明
        planIntroduction: '',
        //回饋選項
        rewardChoiceListType: {
            //選項一
            theFirstOfReward: {
                //回饋金額
                ammount: '',
                //回饋內容說明
                introduction: '',
                //預計實現時間
                implementTime: '',
            },
            //選項二
            theSecondOfReward: {
                //回饋金額
                ammonut: '',
                //回饋內容說明
                introduction: '',
                //預計實現時間
                implementTime: '',
            }
        },
        //相關網站
        webLink: '',
        //影片網址
        videoLink: '',
    },
};

const proposalSlice = createSlice({
    name: 'proposalData',
    initialState,
    reducers: {
        getProposalType: (state, action: PayloadAction<string>) => {
            state.params.proposalType = action.payload;
        },
        getName: (state, action: PayloadAction<string>) => {
            state.params.name = action.payload;
        },
        getEmail: (state, action: PayloadAction<string>) => {
            state.params.email = action.payload;
        },
        getStartYear: (state, action: PayloadAction<string>) => {
            state.params.startTime.year = action.payload;
        },
        getStartMonth: (state, action: PayloadAction<string>) => {
            state.params.startTime.month = action.payload;
        },
        getStartDay: (state, action: PayloadAction<string>) => {
            state.params.startTime.day = action.payload;
        },
        getStartHour: (state, action: PayloadAction<string>) => {
            state.params.startTime.hour = action.payload;
        },
        getStartMinute: (state, action: PayloadAction<string>) => {
            state.params.startTime.minute = action.payload;
        },
        getEndYear: (state, action: PayloadAction<string>) => {
            state.params.endTime.year = action.payload;
        },
        getEndMonth: (state, action: PayloadAction<string>) => {
            state.params.endTime.month = action.payload;
        },
        getEndDay: (state, action: PayloadAction<string>) => {
            state.params.endTime.day = action.payload;
        },
        getEndHour: (state, action: PayloadAction<string>) => {
            state.params.endTime.hour = action.payload;
        },
        getEndMinute: (state, action: PayloadAction<string>) => {
            state.params.endTime.minute = action.payload;
        }
    }    
});

export const {
        getProposalType,
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
export default proposalSlice.reducer;