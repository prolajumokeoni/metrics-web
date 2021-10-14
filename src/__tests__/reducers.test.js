import postsReducer, { getPosts, fetchPosts } from '../redux/posts/posts';

const data = [
  { id: 1, title: 'Task One', userId: 1 },
  { id: 2, title: 'Task Two', userId: 1 },
];
const action = {
  type: 'FETCH_POSTS',
  payload: data,
};
describe('Should test task reducer', () => {
  it('Should return an array on api call', async () => {
    const data1 = await getPosts();
    expect(data1.length).toBeGreaterThan(0);
  });
  it('Should return an array on api call', () => {
    expect(fetchPosts(action.payload)).toBeInstanceOf(Object);
  });
  it('Should return an array when fetch tasks in task reducer is called', () => {
    expect(postsReducer([], action)).toBeInstanceOf(Array);
  });
});
