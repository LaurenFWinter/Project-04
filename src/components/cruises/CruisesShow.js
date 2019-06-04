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
          <div className="columns">
            <div className="column">
              <Link to={`/cruises/${this.state.cruise.id}/edit`} className="button is-primary">Edit</Link>
              <button className="button is-danger" onClick={this.handleDelete}>Delete</button>


              <figure className="image1">
                <img className="imgship" src={this.state.cruise.image} alt={name} />
              </figure>
            </div>
            <div className="column">

              <p>{this.state.cruise.name}</p>
              {this.state.cruise.ship &&
                <span>
                  <p>{this.state.cruise.ship.ship}</p>
                  <p>{this.state.cruise.ship.activities}</p>
                </span>}
              {this.state.cruise.city && <p>{this.state.cruise.city.name}</p>}

            </div>
          </div>

        </div>
      </section>
    )
  }

}

export default CruisesShow
