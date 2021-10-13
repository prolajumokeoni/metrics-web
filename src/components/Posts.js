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
      <div className="border p-5 text-center">
        <i className="fas fa-blog" />
        {' '}
        {' '}
        All Blog Posts
        {' '}
        {data.length}
      </div>
      <div className="row m-0 p-0">
        {data.map((post) => (
          <div className="col-6 col-lg-4 border p-3" key={post.id}>
            <i className="fab fa-hubspot" />
            <PostForm post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
