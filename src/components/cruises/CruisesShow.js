import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'



class CruisesShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cruise: null
    }

  }

  componentDidMount() {
    axios.get(`/api/cruises/${this.props.match.params.id}`)
      .then(res => this.setState({ cruise: res.data }))
      .catch(err => console.error(err))
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/cruises/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/cruises'))
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.cruise.createdBy._id
  }


  render() {
    if(!this.state.cruise) return null

    return (
      <section className="section">


        <div className="container">
          <div className="hero-body">
            <div className="container">
              <Link to={`/cruises/${this.state.cruise.id}/edit`} className="button is-light">Edit</Link>
              <button className="button is-light" onClick={this.handleDelete}>Delete</button>
              <h1 className="title">
                <figure className="imgcategory">
                  <img className="imgship" src={this.state.cruise.image} alt={name} />
                </figure>
              </h1>
              <div className="columns">
                <div className="column center">
                </div>
              </div>
            </div>


            <div className="column">
              <h1 className="titlemax center">{this.state.cruise.name}</h1>
              <h3 className="subheading center">{this.state.cruise.region}</h3>
              {this.state.cruise.city && <p><strong>Ship Itinerary:</strong> {this.state.cruise.city.name}</p>}
              {this.state.cruise.ship &&
                <span>
                  <p><strong>Ship Name:</strong> {this.state.cruise.ship.ship}</p>
                  <p>{this.state.cruise.ship.activities}</p>
                </span>}
              <div>
                <p><strong>Description:</strong> {this.state.cruise.descriptionshort} && {this.state.cruise.descriptionlong}</p>
              </div>

            </div>
          </div>

        </div>

      </section>
    )
  }

}

export default CruisesShow
