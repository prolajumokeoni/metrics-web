import React from 'react';
import { NavLink } from 'react-router-dom';

const PostForm = ({ post }) => (
  <NavLink to={`${post.id}`} className="text-center text-white text-decoration-none">
    <p>{post.title}</p>
  </NavLink>
);

export default PostForm;
