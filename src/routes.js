import React from 'react'
import { Route, IndexRoute } from 'react-router'

// page
import { App, Article } from './containers'

class NoMatch extends React.Component {
  render() {
    return (
      <p>404 not found.</p>
    )
  }
}

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Article} />
    <Route path="*" component={NoMatch} status="404" />
  </Route>
)
