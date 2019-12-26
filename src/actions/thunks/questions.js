import {getQuestions} from '../actions/questions';
import {getFirestoreQuestions} from '../../cloudFunctionsAPI/questions';

export const fetchQuestions = () => (dispatch, getState) => {
    return dispatch(getQuestions(
            getFirestoreQuestions()
    ));
};
