import React from 'react'
import axios from 'axios'


class CruisesShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cruises: []
    }

  }

  componentDidMount() {
    axios.get(`/api/cruises/${this.props.match.params.id}`)
      .then(res => this.setState({ cruises: res.data }))
  }


  render() {
    if(!this.state.cruises) return null

    return (
      <section className="section">
        <div className="container">

          <h1 className="title is-1"></h1>
        </div>
      </section>
    )
  }
}


export default CruisesShow
