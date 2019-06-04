import React from 'react'
import Auth from '../../lib/Auth'
import axios from 'axios'
import Form from './Form'


class Edit extends React.Component {

  constructor() {
    super()

    this.state = {
      data: null,
      errors: '',
      ships: []
    }


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/cruises/${this.props.match.params.id}`, this.state.data, {
    })
      .then(res => {
        res.data.ship_id = res.data.ship.id
        this.setState({ data: res.data })
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))

    axios.get('/api/ships')
      .then(res => this.setState({ ships: res.data }))
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }


  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    const data = this.state.data
    delete data['ship']
    delete data['city']
    delete data['id']
    delete data['categories']

    axios.put(`/api/cruises/${this.props.match.params.id}`, data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/cruises'))
  }



  render() {
    if(!this.state.data && !this.state.ships.length) return null
    console.log(this.state.errors, 'state')
    return (
      <section className="hero is-large">
        <div className="hero-body hero-image herobody" style={{ backgroundImage: 'url(http://www.arubaports.com/main/wp-content/uploads/2013/12/about.jpg)'}}>
          <div className="container">
            <div>
              <h1 className="title1">Update a Cruise Ship..</h1>
            </div>
          </div>
        </div>

        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state.data}
          errors={this.state.errors}
          ships={this.state.ships}
        />


      </section>
    )
  }
}

export default Edit
