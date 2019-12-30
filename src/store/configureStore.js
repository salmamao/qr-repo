import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {questionsReducer} from "../reducers/questions";
import logger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

export default function configureStore(initialState = {}) {
    const reducer = combineReducers({
        questions: questionsReducer
    });

    let middlewares = [thunk, promise, logger];

    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};

