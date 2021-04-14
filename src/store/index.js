import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'

import posts from 'store/posts'

const store = createStore(reducer, {
  posts
}, applyMiddleware(reduxThunk))

export default store