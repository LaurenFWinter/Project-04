import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cruise: null
    }

  }

  componentDidMount() {
    axios.get(`/api/cruises/${this.props.match.params.id}`)
      .then(res => this.setState({ cruise: res.data }))
        .catch(err => console.error(err))
  }

    render() {
      if(!this.state.cruise) return null

      return (
        <section className="section">


          <div className="container">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  <figure className="imgcategory">
                    <img className="imgship" src={this.state.cruise.ship.image} alt={name} />
                  </figure>
                </h1>
                <div className="columns">
                  <div className="column center">
                  </div>
                </div>
              </div>


              <div className="column">
                <h1 className="titlemax center">{this.state.cruise.ship.ship}</h1>
                <h3 className="subheading center">{this.state.cruise.ship.company}</h3>
                {this.state.cruise.city && <p><strong>Ship Itinerary:</strong> {this.state.cruise.name}</p>}
                {this.state.cruise.ship &&
                  <span>
                    <p><strong>Description of ports: </strong>{this.state.cruise.descriptionshort}</p>
                  </span>}
                <div>
                  <p><strong>Activities onboard: </strong> {this.state.cruise.ship.activities}</p>
                </div>

              </div>
            </div>

          </div>

        </section>
      )
    }

  }

export default Show
