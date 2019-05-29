import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'



import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
// import Login from './components/common/Login'
// import Register from './components/common/Register'
// <Route path="/register" component={Register} />
// <Route path="/login" component={Login} />


import 'bulma'


class App extends React.Component {

  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
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
