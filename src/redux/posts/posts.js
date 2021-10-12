import axios from 'axios';

const FETCH_POSTS = 'App/posts/GET_POSTS';
const url = 'http://jsonplaceholder.typicode.com/posts';
export const fetchPosts = (payload) => ({
  type: FETCH_POSTS,
  payload,
});

export const getPosts = () => async (dispatch) => {
  const { data } = await axios.get(url);
  const posts = [];
  data.forEach((post) => {
    const singlePost = {
      id: post.userId,
      title: post.title,
      body: post.body,
    };
    posts.push(singlePost);
  });
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
