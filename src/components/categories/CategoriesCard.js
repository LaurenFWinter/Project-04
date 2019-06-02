import React from 'react'

const CategoriesCard = ({ image, name  }) => {
  return (
    <div>
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <h3 className="subheading">{name}</h3>
    </div>
  )
}

export default CategoriesCard
