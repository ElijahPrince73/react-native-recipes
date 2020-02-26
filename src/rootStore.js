import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducers';

const enhancer = compose(applyMiddleware(thunk));

export default createStore(reducers, enhancer);
