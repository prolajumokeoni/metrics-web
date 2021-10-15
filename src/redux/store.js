import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import posts from './posts/posts';

const middleware = [thunk, logger];

const reducer = combineReducers({
  posts,
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
