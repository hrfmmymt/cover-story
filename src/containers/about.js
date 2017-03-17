import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as meta from '../actions/meta'

// component
import About from '../components/about'

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
About.fetchData = (dispatch) => {
  return dispatch({
    type: 'META-SET',
    meta: {
      title: 'About Container fetchData',
      description: '/src/containers/about.js fetchData',
      img: 'about_container.jpeg',
      url: '/src/containers/about.js'
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
