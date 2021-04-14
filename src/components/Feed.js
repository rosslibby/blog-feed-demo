import React, { Component } from 'react'
import { getComments } from 'actions/comments'
import { getPosts } from 'actions/posts'
import { connect } from 'react-redux'

import Post from 'components/Post'
import 'styles/feed.scss'

class Feed extends Component {
  async componentDidMount() {
    await this.props.getPosts()
    await this.props.getComments()
  }

  render() {
    const {posts} = this.props

    return Array.isArray(posts.items) ? (
      <div className="feed">
        {posts.items.map(post => <Post key={`post-${post.id}`} {...post} />)}
      </div>
    ) : null
  }
}

const mapStateToProps = ({ posts }) => ({ posts })
const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments()),
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)