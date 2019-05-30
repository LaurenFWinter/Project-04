import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import CitiesIndex from './components/cities/Index'
import CitiesShow from './components/cities/Show'
import ShipsIndex from './components/ships/Index'
import ShipsShow from './components/ships/Show'

// import Login from './components/common/Login'
// import Register from './components/common/Register'
// <Route path="/register" component={Register} />
// <Route path="/login" component={Login} />


import 'bulma'
import './style.scss'


class App extends React.Component {

  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/ships/:id" component={ShipsShow} />
            <Route path="/ships" component={ShipsIndex} />
            <Route path="/cities/:id" component={CitiesShow} />
            <Route path="/cities" component={CitiesIndex} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
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
