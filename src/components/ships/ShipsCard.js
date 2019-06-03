import React from 'react'

const ShipsCard = ({ company, ship, image }) => {
  return (
    <div>
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <h3 className="fontsize">{company}</h3>
      <h4>{ship}</h4>
    </div>
  )
}

export default ShipsCard
