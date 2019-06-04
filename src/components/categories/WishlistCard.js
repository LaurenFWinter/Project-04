import React from 'react'

const WishlistCard = ({ name, image }) => {

  return (
    <div className="card is-shady">
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h3 className="card-header-title">{name}</h3>
    </div>
  )
}

export default WishlistCard
