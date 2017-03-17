import React from 'react'

export default class About extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'About Components',
        description: '/src/components/about.js actions',
        img: 'about_components.jpeg',
        url: '/src/components/about.js'
      })
    }
  }

  render() {
    return (
      <div className="about">
        <h2>This page is /about</h2>
      </div>
    )
  }
}

About.propTypes = {
  didMount: React.PropTypes.bool,
  actions: React.PropTypes.object
}
