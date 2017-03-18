import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  componentDidMount() {
    this.props.actions.didMount()

    const resizeBanner = () => {
      const coverHeight = window.innerHeight * 0.80
      document.getElementById('header').setAttribute('style', 'height: ' + Math.floor(coverHeight) + 'px;')
      document.body.setAttribute('style', 'min-height: ' + Math.floor(coverHeight * 2) + 'px;')
    }
    window.onresize = () => {
      if (window.innerWidth < 768) return
      resizeBanner()
    }
    resizeBanner()

    document.querySelector('h1').classList.add('onLoaded')

    const stickWithPositionFixed = true

    const handleHeader = () => {
      const scrolled = window.scrollY
      if (stickWithPositionFixed) {
        if (scrolled > document.getElementById('header').offsetHeight) {
          document.getElementById('nav').classList.add('sticked')
        } else {
          document.getElementById('nav').classList.remove('sticked')
        }
      }
    }
    window.addEventListener('scroll', e => {
      handleHeader()
    })
    handleHeader()
  }

  render() {
    const { meta } = this.props

    return (
      <div className="container">

        <div className="static">
          <header id="header">
            <h1><Link to="/">hrfmmymt</Link></h1>
          </header>
          <nav id="nav" className="nav">
            <ul>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </div>

        {this.props.children}

      </div>
    )
  }
}

App.propTypes = {
  actions: React.PropTypes.object,
  meta: React.PropTypes.object,
  children: React.PropTypes.object
}
