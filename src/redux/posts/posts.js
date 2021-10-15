import axios from 'axios';

const FETCH_POSTS = 'App/posts/GET_POSTS';
const url = 'https://jsonplaceholder.typicode.com/posts';
export const fetchPosts = (payload) => ({
  type: FETCH_POSTS,
  payload,
});

export const getPosts = () => async (dispatch) => {
  const { data } = await axios.get(url);
  const posts = data.splice(0, 12);
  dispatch(fetchPosts(posts));
};

const initialState = { posts: [] };

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postReducers;
