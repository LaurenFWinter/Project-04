import React from 'react'
import Auth from '../../lib/Auth'
import axios from 'axios'

class Edit extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/ships/${this.props.match.params.id}`, this.state.data, {
    })
      .then(res => this.setState({ data: res.data}))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }


  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.put(`/api/ships/${this.state.data.id}`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/api/ships'))
      .catch(err => this.setState({ errors: err.response.data.errors }))


  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Company</label>
                  <div className="control">
                    <input
                      className="input"
                      name="company"
                      placeholder="eg: Princess Cruise Line"
                      onChange={this.handleChange}
                      value={this.state.data.company || ''}
                    />
                  </div>
                  {this.state.errors.company && <div className="help is-danger">{this.state.errors.company}</div>}

                </div>
                <div className="field">
                  <label className="label">Ship</label>
                  <div className="control">
                    <input
                      className="input"
                      name="ship"
                      placeholder="eg: Golden Princess"
                      onChange={this.handleChange}
                      value={this.state.data.ship || ''}
                    />
                  </div>
                  {this.state.errors.ship && <div className="help is-danger">{this.state.errors.ship}</div>}

                </div>
                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: https://cruiseship.net.jpg"
                      onChange={this.handleChange}
                      value={this.state.data.image || ''}
                    />
                  </div>
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}

                </div>
                <div className="field">
                  <label className="label">Activities</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="activities"
                      placeholder="eg: Disco, Casino, Swimming Pool"
                      onChange={this.handleChange}
                      value={this.state.data.activities || ''}
                    />
                  </div>
                  {this.state.errors.activities && <div className="help is-danger">{this.state.errors.activities}</div>}

                </div>

                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Edit
