import React from 'react'

const Card = ({ company, ship, image, activities, itinerary }) => {
  return (
    <div>
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <h3>{company}</h3>
      <h3>{ship}</h3>
      <h3>{activities}</h3>
      <h3>{itinerary}</h3>
    </div>
  )
}

export default Card
