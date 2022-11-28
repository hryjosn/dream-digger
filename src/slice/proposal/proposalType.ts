export type proposalDataStates = {
    params: {
        proposalType: string,
        name: string,
        email: string,
        startTime: {
            year: string,
            month: string,
            day: string,
            hour: string,
            minute: string,
        },
        endTime: {
            year: string,
            month: string,
            day: string,
            hour: string,
            minute: string,
        },
        targetAmount: string,
        category: string,
        planName: string,
        planSummary: string,
        coverPhoto: string,
        planIntroduction: string,
        rewardChoiceListType: {
            theFirstOfReward: {
                ammount: string,
                introduction: string,
                implementTime: string,
            },
            theSecondOfReward: {
                ammonut: string,
                introduction: string,
                implementTime: string,
            }
        },
        webLink: string,
        videoLink: string,
    },
};