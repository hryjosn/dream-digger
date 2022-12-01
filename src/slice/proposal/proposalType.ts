export type proposalDataStates = {
    params: {
        proposal_type: string,
        name: string,
        email: string,
        start_time: string,
        end_time: string,
        target_amount: string,
        category: string,
        plan_name: string,
        plan_summary: string,
        cover_photo: string,
        plan_introduction: string,
        reward_choice_list_type: {
            the_first_of_reward: {
                ammount: string,
                introduction: string,
                implementTime: string,
            },
            the_second_of_reward: {
                ammonut: string,
                introduction: string,
                implementTime: string,
            }
        },
        web_link: string,
        video_link: string,
    },
    monthList: Array<string>
};