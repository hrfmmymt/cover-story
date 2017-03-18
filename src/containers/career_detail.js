import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as meta from '../actions/meta'

// component
import CareerDetail from '../components/career_detail'

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
CareerDetail.fetchData = (dispatch) => {
  return dispatch({
    type: 'META-SET',
    meta: {
      title: 'CareerDetail Container fetchData',
      description: '/src/containers/career_detail.js fetchData',
      img: 'career_detail_container.jpeg',
      url: '/src/containers/career_detail.js'
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CareerDetail)
