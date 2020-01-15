import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import "./index.scss";
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { moviesReducer } from './reducers'
import { getMovieReducer } from './reducers/getMovie'


const middlewares = [thunk];

const reducer = combineReducers({
  moviesReducer: moviesReducer,
  getMovieReducer: getMovieReducer
})

const store = createStore(
  reducer,
  applyMiddleware(...middlewares),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
