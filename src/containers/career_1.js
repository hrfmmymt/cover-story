import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as meta from '../actions/meta'

// component
import Career1 from '../components/career_1'

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
Career1.fetchData = (dispatch) => {
  return dispatch({
    type: 'META-SET',
    meta: {
      title: 'Career_1 Container fetchData',
      description: '/src/containers/career_1.js fetchData',
      img: 'career_1_container.jpeg',
      url: '/src/containers/career_1.js'
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Career1)
