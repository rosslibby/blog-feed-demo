const posts = (state, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {...state, items: action.posts}
    default:
      return Object.assign({}, state, {...state})
  }
}

export default posts