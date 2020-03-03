import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from './rootReducers';

const client = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});

const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));

export default store;
