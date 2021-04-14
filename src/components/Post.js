import React from 'react'
import 'styles/post.scss'

const Post = ({ title, body, id, userId, comments }) => {
  return (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
    <div className="post__metadata">
      <i className="fal fa-comment-alt-lines" /> {comments && `${comments.length} comments for post #${id}`}
    </div>
  </div>
)}

export default Post