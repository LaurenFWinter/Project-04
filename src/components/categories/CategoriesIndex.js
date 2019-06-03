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
      <section className="hero is-small">
        <div className="hero-body hero-image" style={{ backgroundImage: 'url(https://www.virginholidays.co.uk/.imaging/Phone/dam/d045c975-c6fc-4768-b59d-576052da215a.jpg)' }}>
          <div className="container">
            <div>
              <h1 className="title1">Our Destinations</h1>
              <h1 className="title2">Find your perfect cruise</h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.categories.map(category =>
                <div className="hello" key={category._id}>
                  <Link to={`/categories/${category.id}`}>
                    <CategoriesCard {...category} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    )
  }
}



export default Index
