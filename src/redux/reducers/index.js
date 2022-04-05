import { combineReducers } from 'redux';
import player from './player';
import token from './token';

const rootReducer = combineReducers({ token, player });
export default rootReducer;
