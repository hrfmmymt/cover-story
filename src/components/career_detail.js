import React from 'react'
import { browserHistory } from 'react-router'
import careers from './careers.json'

class CareerDetailItem extends React.Component {
  render() {
    return (
      <article>
        <h2>{ this.props.data.name }</h2>
        <p>{ this.props.data.sub }</p>
        <p>{ this.props.data.overview }</p>
        <p>{ this.props.data.langs }</p>
        <p>{ this.props.data.tools }</p>
        <p>{ this.props.data.notes }</p>
      </article>
    )
  }
}

export default class CareerDetail extends React.Component {
  constructor() {
    super()
    this.state = ({
      careers: []
    })
  }

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

    const thisCareers = careers.filter(career => {
      return (
        career.name === this.props.params.name
      )
    })
    this.setState({
      careers: thisCareers
    })
  }

  render() {
    return (
      <div className={'career__detail is-' + this.props.params.name }>
        <article>
          {
            this.state.careers.map(career => {
              return (
                <CareerDetailItem key={ career } data={ career } />
              )
            })
          }
        </article>
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
  children: React.PropTypes.object,
  careers: React.PropTypes.object
}

CareerDetailItem.propTypes = {
  data: React.PropTypes.object
}
