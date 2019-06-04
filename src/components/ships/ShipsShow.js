import React from 'react'
import axios from 'axios'


class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ships: []
    }

  }

  componentDidMount() {
    axios.get(`/api/ships/${this.props.match.params.id}`)
      .then(res => this.setState({ ships: res.data }))
  }


  render() {
    if(!this.state.ships) return null

    return (


      <section className="section">

        <div className="container">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <figure className="imgcategory">
                  <img className="imgship" src={this.state.ships.image} alt={name} />
                </figure>
              </h1>
              <div className="columns">
                <div className="column center">
                </div>
              </div>
            </div>


            <div className="column">
              <h1 className="titlemax center">{this.state.ships.name}</h1>
              <h3 className="subheading center">{this.state.ships.region}</h3>
              {this.state.ships.city && <p><strong>Ship Itinerary:</strong> {this.state.ships.city.name}</p>}


              {this.state.ships.ship &&
              <span>
                <p><strong>Ship Name:</strong></p>
                <p><strong>Activities onboard:</strong>{this.state.ships.activities}</p>
              </span>}



              <p><strong>Description:</strong> {this.state.ships.descriptionlong}</p>

            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show
