export const getQuestions = (response) => {
    return {
        type: 'FETCH_QUESTIONS',
        payload: response
    };
};

export const getAnswerValidation = (response) => {
    return {
        type: 'GET_ANSWER_VALIDATION',
        payload: response
    };
};
