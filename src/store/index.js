import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducers/index';
import {createLogger} from 'redux-logger';

let initialState = '';

let store = createStore(reducer, initialState , applyMiddleware(thunk,createLogger()));

export default store;
