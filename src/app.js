import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
// import Login from './components/common/Login'
// import Register from './components/common/Register'


import 'bulma'


class App extends React.Component {

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Navbar />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
