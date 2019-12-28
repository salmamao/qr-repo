export const getQuestions = (response) => {
    console.log("*****");
    console.log(response);
    return {
        type: 'FETCH_QUESTIONS',
        payload: response
    };
};
