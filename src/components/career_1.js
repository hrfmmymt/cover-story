import React from 'react'

export default class Career1 extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: '"Career1" Components',
        description: '/src/components/career_1.js actions',
        img: 'career_1_components.jpeg',
        url: '/src/components/career_1.js'
      })
    }
  }

  render() {
    return (
      <div className="career_1">
        <h2>This page is /career_1</h2>
      </div>
    )
  }
}

Career1.propTypes = {
  didMount: React.PropTypes.bool,
  actions: React.PropTypes.object
}
