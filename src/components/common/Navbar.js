import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = { active: false }

    this.logout = this.logout.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')

  }
  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ active: false })
    }
  }
  render () {
    return (
      <nav className="navbar is-info">
        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item display is-size-4">Project 4</Link>

            <div className='navbar-menu'>


              <div className="navbar-end">
                <Link to="/register" className="navbar-item">Register</Link>
                <Link to="/login" className="navbar-item">Login</Link>
                <Link to="/ships" className="navbar-item">Ships</Link>
                <Link to="/cities" className="navbar-item">Cities</Link>
                <Link to="/categories" className="navbar-item">Categories</Link>
                <Link to="/cruises" className="navbar-item">Cruises</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}



export default withRouter(Navbar)
