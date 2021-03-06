import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/posts/posts';
import PostForm from './PostForm';

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const data = posts.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (b.title > a.title) {
      return -1;
    }
    return 0;
  });

  const [postSearch, setpostSearch] = useState('');
  const dataSearch = (str) => setpostSearch(str);

  return (
    <div>
      <div className="row px-2 fs-4 m-0 p-0">
        <div className="col">2021</div>
        <div className="col text-center">Blog</div>
        <div className="col">
          <div className="float-end">
            <i className="fas fa-microphone me-3" />
            <i className="fas fa-cog" />
          </div>
        </div>
      </div>
      <div className="border-pink p-5 text-center fs-1 fw-bold">
        <i className="fab fa-blogger-b pe-3 fs-3" />
        {' '}
        All Blog Posts
        <span className="px-3 fw-light">{data.length}</span>
      </div>
      <input type="text" className="search-pink" onChange={(e) => dataSearch(e.target.value)} placeholder="Search for post title" />
      <div className="row m-0 p-0">
        {data.filter((value) => value.title.toLowerCase().includes(postSearch.toLowerCase()))
          .map((post) => (
            <div
              className="col-6 col-lg-4 border-pink border-round p-3 text-center blog"
              key={post.id}
            >
              <i className="fas fa-blog fs-1 fw-bold pl-3" />
              {' '}
              <PostForm post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
