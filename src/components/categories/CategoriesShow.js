import React from 'react'
import axios from 'axios'



class CategoriesShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: null,
      ships: []
    }

  }

  componentDidMount() {
    axios.get(`/api/categories/${this.props.match.params.id}`)
      .then(res => this.setState({ categories: res.data }))
  }


  render() {
    if(!this.state.categories) return null
    console.log(this.state.categories.cruises)
    return (
      <section className="section">
        <div className="container">
          <h1 className="titlemax">Cruise Holidays</h1>
          {this.state.categories.cruises.map(cruise =>
            <div key={cruise.id}>
              <h1 className="subheading">{cruise.name}</h1>
              <p>{cruise.region}</p>
              <figure className="image">
                <img src={cruise.image} alt={name} />
              </figure>
              <p>{cruise.descriptionshort}</p>
              <p>{cruise.descriptionlong}</p>
            </div>
          )}
        </div>
      </section>
    )
  }
}


export default CategoriesShow
