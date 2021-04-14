import { ENDPOINT } from 'constants/config'
import { GET_COMMENTS } from 'constants/comments'

export const getComments = () => async dispatch => {
  const comments = await (await fetch(`${ENDPOINT}/comments`)).json()

  return dispatch({
    type: GET_COMMENTS,
    comments
  })
}