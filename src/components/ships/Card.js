import React from 'react'

const Card = ({ company, ship, image, activities }) => {
  return (
    <div>
      <h3>{company}</h3>
      <h3>{ship}</h3>
      <h3>{image}</h3>
      <h3>{activities}</h3>
    </div>
  )
}

export default Card
