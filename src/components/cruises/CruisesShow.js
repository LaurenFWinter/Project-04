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
          <figure className="image">
            <img className="imgship" src={this.state.cruise.image} alt={name} />
          </figure>
          <h3>{this.state.cruise.name}</h3>
          <h3>{this.state.cruise.ship.ship}</h3>
          <h3>{this.state.cruise.ship.activities}</h3>
          <h3>{this.state.cruise.city.name}</h3>

        </div>
      </section>
    )
  }
}


export default CruisesShow
