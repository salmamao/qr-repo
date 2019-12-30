//Questions reducer

const initialState = {
    fetching: false,
    fetched: false,
    items: [],
    error: null,
    numberResult: 0,
}

export const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS_PENDING': {
            return {...state, fetched: false, fetching: true};
        }
        case 'FETCH_QUESTIONS_FULFILLED': {
            const {data, numberResult} = action.payload.data;
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                items: data,
                nbResult: numberResult
            };
        }
        case 'FETCH_QUESTIONS_REJECTED': {
            let error = action.payload;

            switch (error.response.statusCode) {
                case 404:
                    error = {
                        message: error.response.message,
                        code: 404
                    }
                    break;
                default:
            }
            return {
                ...state,
                fetching: false,
                items: [],
                error
            };
        }
        default:
            return state;
    }
};