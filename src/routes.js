import React from 'react'
import { Route, IndexRoute } from 'react-router'

// page
import { App, Home, Career, Career1, About } from './containers'

class NoMatch extends React.Component {
  render() {
    return (
      <p>404 not found.</p>
    )
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/career" component={Career} />
      <Route path="career_1" component={Career1} />
    <Route path="/about" component={About} />
    <Route path="*" component={NoMatch} status="404" />
  </Route>
)

export default routes
