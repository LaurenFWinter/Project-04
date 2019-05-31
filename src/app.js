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
import ShipsEdit from './components/ships/Edit'
import CityCategories from './components/categories/Index'
import CityCategoriesShow from './components/categories/Show'
import Cruises from './components/cruises/Index'
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
            <Route path="/cruises" component={Cruises} />
            <Route path="/categories/:id" component={CityCategoriesShow} />
            <Route path="/categories" component={CityCategories} />
            <Route path="/ships/:id/edit" component={ShipsEdit} />
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
