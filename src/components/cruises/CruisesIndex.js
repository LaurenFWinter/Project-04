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
          <div className="columns is-multiline">
            {this.state.cruises.map(cruise =>
              <div key={cruise._id} className="column is-one-quarter-desktop is-one-third-tablet">
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
