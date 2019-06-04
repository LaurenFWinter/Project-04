import React from 'react'
import axios from 'axios'


class CruisesShow extends React.Component {

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
          <div className="columns">
            <div className="column">
              <figure className="image1">
                <img className="imgship" src={this.state.cruise.image} alt={name} />
              </figure>
            </div>
            <div className="column">

              <p>{this.state.cruise.name}</p>
              {this.state.cruise.ship &&
                <span>
                  <p>{this.state.cruise.ship.ship}</p>
                  <p>{this.state.cruise.ship.activities}</p>
                </span>}
              {this.state.cruise.city && <p>{this.state.cruise.city.name}</p>}

            </div>

          </div>



        </div>
      </section>
    )
  }
}


export default CruisesShow
