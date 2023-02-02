import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { proposalDataTypes } from './proposalType';

const initialState: proposalDataTypes  = {
    params: {
        proposal_type: '群眾集資' || '預購式專案' || '訂閱式專案',
        name: '我的名稱',
        email: 'mail@gmail.com',
        //Scheduled starting time
        start_time: moment().format('YYYY-MM-DDTHH:mm'),
        //scheduled ending time
        end_time: moment().format('YYYY-MM-DDTHH:mm'),
        target_amount: '',
        category: 
            '音樂' ||
            '攝影' ||
            '出版' ||
            '時尚' ||
            '設計' ||
            '表演' ||
            '藝術' ||
            '科技' ||
            '教育' ||
            '遊戲' ||
            '飲食' ||
            '空間' ||
            '社會' ||
            '插畫漫畫' ||
            '電影動畫' ||
            '地方招生' ||
            '挺好店' ||
            '新春賀喜' ,
        plan_name: '',
        plan_summary: '',
        cover_photo: '',
        plan_introduction: '',
        //there's two reward options that plan owner should offer
        reward_choice_list_type: {
            the_first_of_reward: {
                ammount: '',
                introduction: '',
                implementTime: '',
            },
            the_second_of_reward: {
                ammonut: '',
                introduction: '',
                implementTime: '',
            }
        },
        web_link: '',
        video_link: '',
        terms_accepted: false,
        terms_acknowledged: false,
    },
    monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    categoryList: ['音樂', '攝影', '出版', '時尚', '設計', '表演', '藝術', '科技', '教育', '遊戲', '飲食', '空間', '社會', '插畫漫畫', '電影動畫', '地方招生', '挺好店', '新春賀喜']
};

const proposalSlice = createSlice({
    name: 'proposalData',
    initialState,
    reducers: {
        getProposalData:(state, action: PayloadAction<proposalDataTypes>) => {
            const {
                proposal_type,
                start_time,
                end_time,
                target_amount,
                category,
                plan_name,
                plan_summary,
                cover_photo,
                plan_introduction,
                reward_choice_list_type,
                web_link,
                video_link,
                terms_accepted,
                terms_acknowledged,
            } = action.payload.params;
            state.params.proposal_type = proposal_type;
            state.params.start_time = start_time;
            state.params.end_time = end_time;
            state.params.target_amount = target_amount;
            state.params.category = category;
            state.params.plan_name = plan_name;
            state.params.plan_summary = plan_summary;
            state.params.cover_photo = cover_photo;
            state.params.plan_introduction = plan_introduction;
            state.params.reward_choice_list_type = reward_choice_list_type;
            state.params.web_link = web_link;
            state.params.video_link = video_link;
            state.params.terms_accepted = terms_accepted;
            state.params.terms_acknowledged = terms_acknowledged;
        },
    }    
});

export const {
        getProposalData,
    } = proposalSlice.actions;
export default proposalSlice.reducer;