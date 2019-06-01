import React from 'react'
import axios from 'axios'


class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cities: []
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

          <h1 className="title is-1"></h1>
        </div>
      </section>
    )
  }
}


export default Show
