import React from 'react'
import axios from 'axios'


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
          <h1 className="title is-1">{this.state.ships.company}</h1>
          <h1 className="title is-1">{this.state.ships.itinerary}</h1>


        </div>
      </section>
    )
  }
}


export default Show
