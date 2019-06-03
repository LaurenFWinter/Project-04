import React from 'react'
import axios from 'axios'


class CitiesShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cities: null 
    }

  }

  componentDidMount() {
    axios.get(`/api/cities/${this.props.match.params.id}`)
      .then(res => this.setState({ cities: res.data }))
  }


  render() {
    if(!this.state.cities) return null

    return (

      <section className="section">
        <div className="container">
          <h1 className="titlemax">Cruise Holidays</h1>
          {this.state.cities.map(city =>
            <div key={city.id}>
              <div className="columns">
                <div className="column">
                  <figure className="image">
                    <img src={city.image} alt={name} />
                  </figure>
                </div>
                <div className="column">


                  <h1 className="subheading">{city.name}</h1>
                  <p>{city.region}</p>
                  <p>{city.descriptionlong}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}


export default CitiesShow
