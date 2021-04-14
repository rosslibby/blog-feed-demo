import React from 'react'
import { connect } from 'react-redux'

import { changePage } from 'actions/pages'
import 'styles/pagination.scss'

const pageButtons = (page, pages, set) => {
  const buttons = []
  for (let i = 0; i < pages; i++) {
    const buttonCls = ['pagination__button']
    if (page === i) buttonCls.push('pagination__button--active')

    buttons.push(<button className={buttonCls.join(' ')} onClick={() => set(i)}>{i + 1}</button>)
  }

  return buttons
}

const Pagination = ({ changePage, pages }) => (
  <div className="pagination">
    {pageButtons(pages.page, pages.pages, changePage)}
  </div>
)

const mapStateToProps = ({ page, pages }) => ({ page, pages })
const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch(changePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)