import React from 'react'

import Comment from 'components/Comment'
import 'styles/post.scss'

const Post = ({ title, body, id, userId, comments }) => {
  const [commentsVisible, setCommentsVisible] = React.useState(false)

  return (
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      {commentsVisible && <div className="post__comments">
        {comments.map(comment => <Comment key={`comment-${comment.id}`} {...comment} />)}
      </div>}
      <div className="post__metadata" onClick={() => setCommentsVisible(!commentsVisible)}>
        <i className="fal fa-comment-alt-lines" /> {comments && `${comments.length} comments on post #${id}`}
      </div>
    </div>
  )
}

export default Post