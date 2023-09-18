import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../demo/store'; // Importe o store do Redux
import Demo from './index'; // Importe o seu componente Demo

ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  document.getElementById('root')
);