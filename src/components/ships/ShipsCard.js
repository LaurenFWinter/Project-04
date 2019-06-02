import React from 'react'

const ShipsCard = ({ company, ship, image, activities }) => {
  return (
    <div>
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <h3>{company}</h3>
      <h3>{ship}</h3>
      <h3>{activities}</h3>
    </div>
  )
}

export default ShipsCard
