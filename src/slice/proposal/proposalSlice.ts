import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { proposalDataStates } from './proposalType';

const initialState: proposalDataStates = {
    params: {
        //提案類型
        proposal_type: '群眾集資' || '預購式專案' || '訂閱式專案',
        //真實名稱
        name: '',
        //信箱
        email: '',
        //預計開始時間
        start_time: moment().toISOString(),
        //預計結束時間
        end_time: moment().toISOString(),
        //計畫目標(金額)
        target_amount: '',
        //分類
        category: '',
        //計畫名稱
        plan_name: '',
        //計畫簡介
        plan_summary: '',
        //封面照片
        cover_photo: '',
        //計畫說明
        plan_introduction: '',
        //回饋選項
        reward_choice_list_type: {
            //選項一
            the_first_of_reward: {
                //回饋金額
                ammount: '',
                //回饋內容說明
                introduction: '',
                //預計實現時間
                implementTime: '',
            },
            //選項二
            the_second_of_reward: {
                //回饋金額
                ammonut: '',
                //回饋內容說明
                introduction: '',
                //預計實現時間
                implementTime: '',
            }
        },
        //相關網站
        web_link: '',
        //影片網址
        video_link: '',
    },
    monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};

const proposalSlice = createSlice({
    name: 'proposalData',
    initialState,
    reducers: {
        getProposalType: (state, action: PayloadAction<string>) => {
            state.params.proposal_type = action.payload;
        },
        getName: (state, action: PayloadAction<string>) => {
            state.params.name = action.payload;
        },
        getEmail: (state, action: PayloadAction<string>) => {
            state.params.email = action.payload;
        },
        getStartTime: (state, action: PayloadAction<string>) => {
            state.params.start_time = action.payload!;
        },
        getEndTime: (state, action: PayloadAction<string>) => {
            state.params.end_time = action.payload!;
        },
    }    
});

export const {
        getProposalType,
        getStartTime, 
        getEndTime,
    } = proposalSlice.actions;
export default proposalSlice.reducer;