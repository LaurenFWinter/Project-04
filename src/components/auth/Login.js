import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'


class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/loginpage')
      })
      .catch(() => this.setState({ error: 'Invalid credentials' }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <form className="register" onSubmit={this.handleSubmit}>
            <h2 className="titlemax">Login </h2>

            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="mrsjones@gmail.com"
                      onChange={this.handleChange}
                      value={this.state.data.email}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                      value={this.state.data.password}
                    />
                  </div>
                </div>
                <button className="is-light">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
export default Login
