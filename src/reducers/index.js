import { combineReducers } from 'redux'

import comments from 'reducers/comments'
import posts from 'reducers/posts'

export default combineReducers({
  comments,
  posts
})