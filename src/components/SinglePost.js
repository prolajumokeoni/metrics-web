import React from 'react';
import { NavLink } from 'react-router-dom';

const SinglePost = ({ post }) => (
  <div className="p-2">
    <NavLink to="/" className="text-decoration-none text-white">
      <i className="fas fa-arrow-left" />
    </NavLink>
    <hr />
    <div className="p-2 text-center fw-bold fs-2">{post.title}</div>
    <div className="article">{post.body}</div>
  </div>
);

export default SinglePost;
