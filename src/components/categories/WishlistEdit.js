import React from 'react'
import Auth from '../../lib/Auth'
import axios from 'axios'

class WishlistEdit extends React.Component {

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
    axios.get(`/api/cruises/${this.props.match.params.id}`, this.state.data, {
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

    axios.put(`/api/wishlist/${this.state.data.id}`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/api/wishlist'))
      .catch(err => this.setState({ errors: err.response.data.errors }))


  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <h1 className="titlemax">Create your own wishlist of Cruises!</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Name of your Ship</label>
                  <div className="control">
                    <input
                      className="input"
                      name="ship"
                      placeholder="eg: Princess Cruise Line"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.ship && <div className="help is-danger">{this.state.errors.ship}</div>}

                </div>
                <div className="field">
                  <label className="label">Name of your Company</label>
                  <div className="control">
                    <input
                      className="input"
                      name="ship"
                      placeholder="eg: Royal Caribbean"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.company && <div className="help is-danger">{this.state.errors.company}</div>}

                </div>
                <div className="field">
                  <label className="label">Your Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: https://cruiseship.net.jpg"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}

                </div>
                <div className="field">
                  <label className="label">What activities would your cruise ship have?</label>
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
                <div className="field">
                  <label className="label">Write a short description..</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="descriptionshort"
                      placeholder="eg: Picture yourself on beautiful stretches of pure white sand, beside turquoise waters filled with tropical fish, listening to calypso rhythms under sun-soaked skies."
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.descriptionshort && <div className="help is-danger">{this.state.errors.descriptionshort}</div>}
                </div>

                <div className="field">
                  <label className="label">List the Cities your ship would visit</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="City"
                      placeholder="eg: Miami, George Town, Cienfuegos, Havana, Miami"
                      onChange={this.handleChange}
                      value={this.state.data.City || ''}
                    />
                  </div>
                  {this.state.errors.City && <div className="help is-danger">{this.state.errors.City}</div>}
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

export default WishlistEdit
