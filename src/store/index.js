import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'

import comments from 'store/comments'
import pages from 'store/pages'
import posts from 'store/posts'

const store = createStore(reducer, {
  comments,
  pages,
  posts
}, applyMiddleware(reduxThunk))

export default store