import React from 'react'
import { Link } from 'react-router'

export default class Article extends React.Component {
  componentWillMount() {
    if (this.props.didMount) {
      this.props.actions.meta.set({
        title: 'Home Components',
        description: 'This is write by /src/components/home.js actions',
        img: 'home_components.jpeg',
        url: '/src/components/home.js'
      })
    }
  }

  render() {
    return (
      <div className="home">

        {
        /****
         Static view
        ****/ }

        <div id="head" className="static header">
          <h1>hrfmmymt</h1>
        </div>

        <ul id="nav" className="static nav">
          <li><Link to="/career">career</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>

      </div>
    )
  }
}
