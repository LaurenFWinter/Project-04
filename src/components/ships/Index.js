import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Card from './Card'

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
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.ships.map(ship =>
              <div key={ship._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/ships/${ship.id}`}>
                  <Card {...ship} />
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
