import React from 'react';
 import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'


const Main = () => (
  <Provider theme ={theme}>
    <App />
  </Provider>
);

export default Main;
