export type proposalDataStates = {
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
    category: string,
    planName: string,
    planSummary: string,
    coverPhoto: string,
    planIntroduction: string,
    rewardChoiceListType: {
        theFirstOfReward: {
            ammount: string,
            introduction: string,
        },
        theSecondOfReward: {
            ammonut: string,
            introduction: string,
        }
    },
    webLink: string,
    VideoLink: string,
};