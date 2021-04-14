const comments = (state, action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
      return {...state, items: action.comments}
    default:
      return Object.assign({}, state, {...state})
  }
}

export default comments