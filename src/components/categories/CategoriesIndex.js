import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import CategoriesCard from './CategoriesCard'

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
    console.log(this.state.categories)
    return (
      <section className="section">
        <div className="container">
          <h1> Where would you like to visit? </h1>
          <div className="columns is-multiline">
            {this.state.categories.map(category =>
              <div key={category._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/categories/${category.id}`}>
                  <CategoriesCard {...category} />
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
