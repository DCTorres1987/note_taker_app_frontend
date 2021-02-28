import React from 'react';
import ReactDOM from 'react-dom';
import { BrowswerRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer.js';

import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowswerRouter>
    <App />
    </BrowswerRouter>
  </Provider>,
  document.getElementById('root')
);
