const posts = (state, action) => {
  switch(action.type) {
    case 'GET_COMMENTS':
      return {...state, items: state.items.map(post => ({
        ...post,
        comments: action.comments.filter(comment => comment.postId === post.id)
      }))}
    case 'GET_POSTS':
      return {...state, items: action.posts}
    default:
      return Object.assign({}, state, {...state})
  }
}

export default posts