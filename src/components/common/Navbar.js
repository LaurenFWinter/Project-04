import React from 'react'
import { Link, withRouter } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navbar is-light">
      <div className="container">

        <div className="navbar-brand">
          <Link to="/" className="navbar-item display is-size-4">Project 4</Link>

          <div className='navbar-menu'>


            <div className="navbar-end">
              <Link to="/register" className="navbar-item">Register</Link>
              <Link to="/login" className="navbar-item">Login</Link>
              <Link to="/ships" className="navbar-item">Ships</Link>
              <Link to="/cities" className="navbar-item">Cities</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}



export default withRouter(Navbar)
