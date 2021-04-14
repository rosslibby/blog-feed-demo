import React from 'react'
import 'styles/post.scss'

const Post = ({ title, body, id, userId }) => {
  return (
  <div className="post">
    <h2 className="post__title">{title}</h2>
    <p className="post__body">{body}</p>
  </div>
)}

export default Post