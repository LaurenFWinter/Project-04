import React from 'react'
import axios from 'axios'



class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }

  }

  componentDidMount() {
    axios.get(`/api/categories/${this.props.match.params.id}`)
      .then(res => this.setState({ categories: res.data }))
  }


  render() {
    if(!this.state.categories) return null

    return (
      <section className="section">
        <div className="container">
          <h1>Hello</h1>
          <figure className="image">
            <img src={this.state.categories.image} alt={name} />
          </figure>
          <h3>{this.state.categories.name}</h3>
        </div>
      </section>
    )
  }
}


export default Show
