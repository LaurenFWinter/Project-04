import React from 'react'
import axios from 'axios'


class CruisesShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cruise: []
    }

  }

  componentDidMount() {
    axios.get(`/api/cruises/${this.props.match.params.id}`)
      .then(res => this.setState({ cruise: res.data }))
  }


  render() {
    if(!this.state.cruise.ship) return null
    console.log(this.state.cruise)
    console.log(this.state.cruise.ship.ship, 'cruise.ship.ship')



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
              <p>{this.state.cruise.ship.ship}</p>
              <p>{this.state.cruise.ship.activities}</p>
              <p>{this.state.cruise.city.name}</p>

            </div>

          </div>



        </div>
      </section>
    )
  }
}


export default CruisesShow
