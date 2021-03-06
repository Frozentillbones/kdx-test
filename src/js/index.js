import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import '../style/index.scss';

const root = document.getElementById('root');
render(
  <Provider store={store}>
      <App/>
  </Provider>
  , root
);
