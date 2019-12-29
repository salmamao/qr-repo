import axios from 'axios';

export const FIREBASE_ENDPOINT_URL = `https://us-central1-qr-test-project-e01ff.cloudfunctions.net`;

export const getQuestionsList = () => {
    const requestUrl = `${FIREBASE_ENDPOINT_URL}/getQuestionsList`;
    return axios.get(requestUrl);
};

export const getQuestion = (questionId) => {
    const requestUrl = `${FIREBASE_ENDPOINT_URL}/getQuestion?id=${questionId}`;
    return axios.get(requestUrl);
};

export const getValidateAnswer = (questionId, answer) => {
    const requestUrl = `${FIREBASE_ENDPOINT_URL}/validateAnswer?id=${questionId}&answer=${answer}`;
    return axios.get(requestUrl);
};