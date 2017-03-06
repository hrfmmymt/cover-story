import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as meta from '../actions/meta'

// component
import Article from '../components/article'

// state to props
const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.meta,
    didMount: state.didMount
  }
}

// dispatch proos
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      meta: bindActionCreators({...meta}, dispatch)
    }
  }
}

// fetchData function on access at server
Article.fetchData = (dispatch) => {
  return dispatch({
    type: 'META-SET',
    meta: {
      title: 'Article Container fetchData',
      description: 'This is write by /src/containers/article.js fetchData',
      img: 'article_container.jpg',
      url: '/src/containers/article.js'
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)
