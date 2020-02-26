import { combineReducers } from 'redux';
import authReducer from './features/Auth/authReducer';

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
