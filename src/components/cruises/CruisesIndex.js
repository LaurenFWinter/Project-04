import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CruisesCard from './CruisesCard'

class CruisesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      cruises: []
    }
  }

  componentDidMount() {
    axios('/api/cruises')
      .then(res => this.setState({ cruises: res.data }))
  }


  render() {
    return (

      <section className="section">
        <div className="container">
          <div className="hero is-large">
            <div className="hero-body hero-image" style={{ backgroundImage: 'url(https://www.telegraph.co.uk/content/dam/Travel/Cruise/cruise-ship-beach-xlarge.jpg)' }}>
              <div className="container">
                <div>
                  <h1 className="title2">Cruise Destinations</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            {this.state.cruises.map(cruise =>
              <div key={cruise._id} className="column is-one-third-desktop">
                <Link to={`/cruises/${cruise.id}`}>
                  <CruisesCard {...cruise} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}



export default CruisesIndex
