import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ShipsCard from './ShipsCard'

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      ships: []
    }
  }

  componentDidMount() {
    axios('/api/ships')
      .then(res => this.setState({ ships: res.data }))
  }


  render() {
    console.log(this.state.ships)
    return (
      <section className="section">
        <div className="container">
          <h1> Where would you like to visit? </h1>
          <div className="columns is-multiline">
            {this.state.ships.map(ship =>
              <div key={ship._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/ships/${ship.id}`}>
                  <ShipsCard {...ship} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}



export default Index
