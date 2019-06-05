import React from 'react'
import axios from 'axios'

import Form from './Form'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        region: '',
        image: '',
        descriptionshort: '',
        ship_id: 0
      },
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get('/api/ships')
      .then(res => this.setState({ ships: res.data }))
      .catch(err => console.error(err.message))

  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.post('/api/cruises', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/cruises'))
      .catch(err => console.error(err))
  }

  render() {
    if(!this.state.ships) return null
    return (

      <section className="hero is-large">
        <div className="hero-body hero-image herobody" style={{ backgroundImage: 'url(https://www.holidaywatchdog.com/img/resized/hero-main//locations/40346/604434896.jpg)'}}>
          <div className="container">
            <div>
              <h1 className="title1">Voyage. Make your own Cruise </h1>
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

export default New
