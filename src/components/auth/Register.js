import React from 'react'
import axios from 'axios'


class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch((err) => this.setState({ errors: err.response.data }))
  }


  render() {

    return (

      <section className="section">
        <div className="container">
          <form className="register" onSubmit={this.handleSubmit}>
            <h2 className="title">Register </h2>

            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input
                      className="input"
                      name="username"
                      placeholder="Jones123"
                      onChange={this.handleChange}
                      value={this.state.data.username}
                    />
                  </div>
                </div>
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
                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password_confirmation"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                      value={this.state.data.password_confirmation}
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

export default Register
