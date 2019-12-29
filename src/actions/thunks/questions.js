import {getQuestions, getAnswerValidation} from '../actions/questions';
import {getQuestionsList, getQuestion, getValidateAnswer} from '../../cloudFunctionsAPI/questions';

export const fetchQuestions = () => (dispatch, getState) => {
    return dispatch(getQuestions(
            getQuestionsList()
    ));
};

export const fetchQuestion = (questionId) => (dispatch, getState) => {
    return dispatch(getQuestions(
            getQuestion(questionId)
    ));
};

export const validateAnswer = (questionId, answer) => (dispatch, getState) => {
    return dispatch(getAnswerValidation(
            getValidateAnswer(questionId, answer)
    ));
};
