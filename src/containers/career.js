import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as meta from '../actions/meta'

// component
import Career from '../components/career'

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
Career.fetchData = (dispatch) => {
  return dispatch({
    type: 'META-SET',
    meta: {
      title: 'Career Container fetchData',
      description: '/src/containers/career.js fetchData',
      img: 'career_container.jpeg',
      url: '/src/containers/career.js'
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Career)
