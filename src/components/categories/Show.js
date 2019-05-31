import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cities: []
    }

  }

  componentDidMount() {
    axios.get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ cities: res.data }))
  }


  render() {
    if(!this.state.cities) return null

    return (
      <section className="section">
        <div className="container">
          <Link to={`/cities/${this.state.cities.id}/edit`} className="button is-primary">Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
          <figure className="image">
            <img src={this.state.cities.image} alt={name} />
          </figure>
          <h3>{this.state.cities.name}</h3>
        </div>
      </section>
    )
  }
}


export default Show
