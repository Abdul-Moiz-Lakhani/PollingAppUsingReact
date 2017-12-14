import {createStore, combineReducers, applyMiddleware} from 'redux';
import {showName} from './Reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store = createStore(showName, {}, applyMiddleware(logger, thunk));