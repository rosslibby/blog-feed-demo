import React, { Component } from 'react'
import { getComments } from 'actions/comments'
import { getPosts } from 'actions/posts'
import { connect } from 'react-redux'

import Pagination from 'components/Pagination'
import Post from 'components/Post'
import 'styles/feed.scss'

class Feed extends Component {
  async componentDidMount() {
    await this.props.getPosts()
    await this.props.getComments()
  }

  render() {
    const {pages, posts} = this.props
    const pagePosts = posts.items ? posts.items.slice(pages.page * 10, (pages.page * 10) + 10) : []
    console.log(pagePosts)

    return Array.isArray(posts.items) ? (
      <div className="feed">
        {pagePosts.map(post => <Post key={`post-${post.id}`} {...post} />)}
        <Pagination />
      </div>
    ) : null
  }
}

const mapStateToProps = ({ pages, posts }) => ({ pages, posts })
const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments()),
  getPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)