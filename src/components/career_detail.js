import React from 'react'
import { browserHistory } from 'react-router'
import careers from './careers.json'

class CareerDetailItem extends React.Component {
  render() {
    const langs = []
    const langsList = this.props.data.langs
    for (const i in langsList) {
      langs.push(<li key={ langsList[i] }>{ langsList[i] }</li>)
    }

    const tools = []
    const toolsList = this.props.data.tools
    for (const i in toolsList) {
      tools.push(<li key={ toolsList[i] }>{ toolsList[i] }</li>)
    }

    return (
      <article>
        <h2>{ this.props.data.sub }</h2>
        <div className="career__dtail__started started">
          <p>{ this.props.data.started_at }</p>
        </div>
        <p className="career__detail__texts">{ this.props.data.overview }</p>
        <p>Langs: </p>
        <ul>
          {langs}
        </ul>
        <p>Tools: </p>
        <ul>
          {tools}
        </ul>
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

    if (this.props.params.name === 'kl-vg') {
      const div = '<div class="hero"></div>'
      const parent = document.querySelector('.career__detail')
      parent.innerHTML = div
    }
  }

  render() {
    return (
      <div className={'career__detail ' + this.props.params.name }>
        {
          this.state.careers.map(career => {
            return (
              <CareerDetailItem key={ career } data={ career } />
            )
          })
        }
        <div className="backButton">
          <button
            type="button"
            onClick={ browserHistory.goBack }
          >
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
