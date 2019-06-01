import React from 'react'
import axios from 'axios'



class Show extends React.Component {

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
          <div>Cruises</div>
          {this.state.categories.cruises.map(cruise =>
            <div key={cruise.id}>
              <h1>{cruise.name}</h1>
              <p>{cruise.region}</p>
              <p>{cruise.image}</p>
              <p>{cruise.description_short}</p>
              <p>{cruise.description_long}</p>
            </div>
          )}
        </div>
      </section>
    )
  }
}


export default Show
