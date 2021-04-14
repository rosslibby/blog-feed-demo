import { combineReducers } from 'redux'

import comments from 'reducers/comments'
import pages from 'reducers/pages'
import posts from 'reducers/posts'

export default combineReducers({
  comments,
  pages,
  posts
})