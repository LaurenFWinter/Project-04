import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Card from './Card'

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios('/api/categories')
      .then(res => this.setState({ categories: res.data }))
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.categories.map(category =>
              <div key={category._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/categories/${category.id}`}>
                  <Card {...category} />
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
