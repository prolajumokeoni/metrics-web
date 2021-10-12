import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/posts/posts';
import PostForm from './PostForm';

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);

  return (
    <div>
      {posts.map((post) => (
        <PostForm key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
