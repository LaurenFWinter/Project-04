import React from 'react'
import { Link } from 'react-router-dom'
import Wishlistcontents from '../../lib/Wishlistcontents'
class Wishlist extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      newItem: props.location.state,
      wishlist: []
    }

  }

  componentDidMount() {
    const { newItem } = this.state
    const wishlist = Wishlistcontents.getContents()
    if(!newItem){
      this.setState({ wishlist: [...wishlist] })
    } else {
      this.setState({ wishlist: [...wishlist, newItem ]}, () => Wishlistcontents.setContents(this.state.wishlist))
    }
  }


  render() {
    if(!this.state.wishlist){
      <h1 className="title is-1">Your Wishlist is empty</h1>
      return null
    }

    return (
      <section className="wishlist section">
        <div className="container">

          <h1 className="titleh2"> Your Wishlist </h1>
          {this.state.wishlist.length === 0 && <h1 className="title is-5"> There are no items in your wishlist </h1>}

          <div className="columns is-multiline">
            {this.state.wishlist.map((item, index) =>
              <div className="column is-4-desktop is-6-tablet" key={index}>
              </div>
            )}
          </div>

          <p><Link to={'/Loginpage'} className="button is-link is-outlined is-large">Home</Link></p>
          <br />
          <p><Link to={'/categories/new'} className="button is-link is-outlined is-large">Make your Own Cruise</Link></p>
        </div>
      </section>
    )
  }
}
export default Wishlist
