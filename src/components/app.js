import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  componentDidMount() {
    this.props.actions.didMount()
  }

  render() {
    const { meta } = this.props

    return (
      <div className="container">
        <div className="first">
          <h1>Static first view</h1>
          <video poster="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" autoPlay playsInline muted loop>
            <source src="//thenewcode.com/assets/videos/polina.webm" type="video/webm" />
            <source src="//thenewcode.com/assets/videos/polina.mp4" type="video/mp4" />
          </video>
        </div>
        {this.props.children}
      </div>
    )
  }
}
