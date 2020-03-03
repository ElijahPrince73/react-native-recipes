import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import rootStore from './rootStore';

export default () => <Provider store={rootStore}><Routes /></Provider>;
