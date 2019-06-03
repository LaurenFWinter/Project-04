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
      <nav className="navbar is-light">
        <div className="container">

          <div className="navbar-brand">
            <Link to="/Loginpage" className="navbar-item">
              <figure>
                <img src="../images/logo.jpg" />
              </figure>
            </Link>

            <div className='navbar-menu'>
              {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
              {Auth.isAuthenticated() && <Link to="/ships" className="navbar-item">Ships</Link>}
              {Auth.isAuthenticated() && <Link to="/cruises" className="navbar-item">Cruises</Link>}
              {Auth.isAuthenticated() && <Link to="/categories" className="navbar-item">Destinations</Link>}
              {Auth.isAuthenticated() && <Link to="/categories/3/edit" className="navbar-item">Wishlist</Link>}

              <div className="navbar-end">

                {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}



export default withRouter(Navbar)
