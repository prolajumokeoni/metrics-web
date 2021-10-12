import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import posts from './posts/posts';

const middleware = [thunk];

const reducer = combineReducers({
  posts,
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
