import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ships: []
    }

  }

  componentDidMount() {
    axios.get(`/api/ships/${this.props.match.params.id}`)
      .then(res => this.setState({ ships: res.data }))
  }


  render() {
    if(!this.state.ships) return null

    return (
      <section className="section">
        <div className="container">
          <Link to={`/ships/${this.state.ships.id}/edit`} className="button is-primary">Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
          <figure className="image">
            <img src={this.state.ships.image} alt={name} />
          </figure>
          <h3>{this.state.ships.company}</h3>
          <h3>{this.state.ships.ship}</h3>
          <h3>{this.state.ships.activities}</h3>
        </div>
      </section>
    )
  }
}


export default Show
