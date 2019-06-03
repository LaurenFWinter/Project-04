import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'


import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import CitiesIndex from './components/cities/CitiesIndex'
import CitiesShow from './components/cities/CitiesShow'
import ShipsIndex from './components/ships/ShipsIndex'
import ShipsShow from './components/ships/ShipsShow'
import ShipsEdit from './components/ships/ShipsEdit'
import CategoriesIndex from './components/categories/CategoriesIndex'
import CategoriesShow from './components/categories/CategoriesShow'
import WishlistEdit from './components/categories/WishlistEdit'
import Wishlist from './components/categories/Wishlist'
import Loginpage from './components/common/LoginPage'
import CruisesIndex from './components/cruises/CruisesIndex'
import CruisesShow from './components/cruises/CruisesShow'

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
            <Route path="/cruises/:id" component={CruisesShow} />
            <Route path="/cruises" component={CruisesIndex} />
            <Route path="/categories/Wishlist" component={Wishlist} />
            <Route path="/categories/:id/edit" component={WishlistEdit} />
            <Route path="/categories/:id" component={CategoriesShow} />
            <Route path="/categories" component={CategoriesIndex} />
            <Route path="/ships/:id/edit" component={ShipsEdit} />
            <Route path="/ships/:id" component={ShipsShow} />
            <Route path="/ships" component={ShipsIndex} />
            <Route path="/cities/:id" component={CitiesShow} />
            <Route path="/cities" component={CitiesIndex} />
            <Route path="/Loginpage" component={Loginpage} />
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
