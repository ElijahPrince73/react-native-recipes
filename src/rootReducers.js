import { combineReducers } from 'redux';
import homeReducer from './features/Home/containers/homeReducer';

const rootReducer = combineReducers({ homeReducer });

export default rootReducer;
