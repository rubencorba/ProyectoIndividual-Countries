import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import { reducer }  from '../reducer/index.js';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
    );