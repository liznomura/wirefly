import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import './index.css';

import wireflyReducer from './reducers';
const store = createStore(
  wireflyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={ store }>
  <App />
  </Provider>,
  document.getElementById('root'));
