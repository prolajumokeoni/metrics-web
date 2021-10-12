import React from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ post }) => (
  <div>
    <h3>{post.id}</h3>
    <p>{post.title}</p>
    <h3>{post.body}</h3>
  </div>
);

PostForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostForm;
