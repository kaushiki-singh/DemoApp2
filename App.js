import React, {useState, useEffect} from 'react';
import {
  Text, 
  View, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigate from './src/navigation/Navigate';
// import store from './src/store/store';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import store from './src/store/store';

import rootReducer from './src/reducers/combineReducers';

// const client = axios.create({
//   baseURL: 'https://api.github.com',
//   responseType: 'json'
// })

// const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

  const App = () => {
  return (
    <Provider store={store}>
    <Navigate/>
    </Provider>
  );
};


export default App;