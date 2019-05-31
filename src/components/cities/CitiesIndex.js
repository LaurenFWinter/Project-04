import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CitiesCard from './CitiesCard'

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    axios('/api/cities')
      .then(res => this.setState({ cities: res.data }))
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.cities.map(city =>
              <div key={city._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/cities/${city.id}`}>
                  <CitiesCard {...city} />
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
