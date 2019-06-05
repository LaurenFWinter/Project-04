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
    axios.get('/api/cruises')
      .then(res => this.setState({ cruises: res.data }))
  }


  render() {
    if(!this.state.cruises) return null
    console.log(this.state.cruises)
    return (
      <section className="hero is-large">
        <div className="hero-body hero-image herobody" style={{ backgroundImage: 'url(../images/cruise-index-image.jpg)'}}>
          <div className="container">
            <div>
              <h1 className="title1">Voyage. Cruises</h1>
            </div>
          </div>
        </div>
        <div className="columns is-multiline padd1">
          {this.state.cruises.map(cruise =>
            <div key={cruise.id} className="column is-one-third-desktop">
              <Link to={`/cruises/${cruise.id}`}>
                <CruisesCard {...cruise} />
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }
}



export default CruisesIndex
