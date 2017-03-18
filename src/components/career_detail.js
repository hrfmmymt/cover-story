import React from 'react'
import { browserHistory } from 'react-router'

export default class CareerDetail extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'CareerDetail Components',
        description: '/src/components/career_detail.js actions',
        img: 'career_detail_components.jpeg',
        url: '/src/components/career_detail.js'
      })
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className={'career__detail is-' + this.props.params.name }>
        <h2>This page is /CareerDetail { this.props.params.name }</h2>
        <div className="backButton">
          <button
            type="button"
            onClick={ browserHistory.goBack }
          >
          Back
          </button>
        </div>
      </div>
    )
  }
}

CareerDetail.propTypes = {
  didMount: React.PropTypes.bool,
  actions: React.PropTypes.object,
  params: React.PropTypes.object,
  children: React.PropTypes.object
}
