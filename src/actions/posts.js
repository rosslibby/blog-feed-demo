import { ENDPOINT } from 'constants/config'
import { GET_POSTS } from 'constants/posts'

export const getPosts = () => async dispatch => {
  const posts = await (await fetch(`${ENDPOINT}/posts`)).json()

  return dispatch({
    type: GET_POSTS,
    posts
  })
}