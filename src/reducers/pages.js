const pages = (state, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {...state, page: 0, pages: parseInt(action.posts.length / 10) + parseInt(action.posts.length % 10)}
    case 'CHANGE_PAGE':
      return {...state, page: action.page}
    default:
      return Object.assign({}, state, {...state})
  }
}

export default pages