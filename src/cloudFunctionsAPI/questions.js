import axios from 'axios';

export const FIREBASE_ENDPOINT_URL = `https://us-central1-qr-test-project-e01ff.cloudfunctions.net`;

export const getFirestoreQuestions = () => {
    const requestUrl = `${FIREBASE_ENDPOINT_URL}/getQuestionsList`;
    return axios.get(requestUrl);
};