import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createPromise } from 'redux-promise-middleware';

export default function configureStore(initialState = {}) {
    const reducer = combineReducers({

    });

    let middlewares = [thunk, createPromise()];

    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};