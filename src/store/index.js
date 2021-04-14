import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'

import comments from 'store/comments'
import posts from 'store/posts'

const store = createStore(reducer, {
  comments,
  posts
}, applyMiddleware(reduxThunk))

export default store