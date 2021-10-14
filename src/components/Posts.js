import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/posts/posts';
import PostForm from './PostForm';

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const data = posts.sort((a, b) => b.title - a.title);
  return (
    <div>
      <div className="border-pink p-5 text-center fs-1 fw-bold">
        <i className="fas fa-blog text-center" />
        {' '}
        {' '}
        All Blog Posts
        {' '}
        {data.length}
      </div>
      <div className="row m-0 p-0">
        {data.map((post) => (
          <div className="col-6 col-lg-4 border-pink border-round p-3" key={post.id}>
            <i className="fab fa-hubspot fs-1 fw-bold text-center pl-3" />
            <PostForm post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
