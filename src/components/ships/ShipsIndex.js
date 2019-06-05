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
      <section className="hero is-large">
        <div className="hero-body hero-image herobody" style={{ backgroundImage: 'url(https://media.mnn.com/assets/images/2018/02/cruise-ship-sunset-ss.jpg.838x0_q80.jpg)'}}>
          <div className="container">
            <div>
              <h1 className="title1">Voyage. Ships</h1>
            </div>
          </div>
        </div>
        <div className="columns is-multiline padd1">
          {this.state.ships.map(ship =>
            <div key={ship.id} className="column is-one-third-desktop">
              <Link to={`/ships/${ship.id}`}>
                <ShipsCard {...ship} />
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}



export default Index
