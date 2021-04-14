import React from 'react'

import 'styles/comment.scss'

const Comment = ({ name, email, body, id }) => (
  <div className="comment">
    <span className="comment__metadata">
      <span className="comment__name">{name}</span>
      <span className="comment__email"><a href={`mailto:${email}`}>{email}</a></span>
    </span>
    <p className="comment__body">{body}</p>
  </div>
)

export default Comment