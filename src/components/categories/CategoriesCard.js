import React from 'react'

const CategoriesCard = ({ image, name, descriptionShort  }) => {
  return (
    <div>
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <h3>{name}</h3>
      <h3>{descriptionShort}</h3>
    </div>
  )
}

export default CategoriesCard
