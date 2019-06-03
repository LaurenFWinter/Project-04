import React from 'react'

const CruisesCard = ({ name, image }) => {
  return (

    <div>
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <h3 className="fontsize">{name}</h3>
    </div>
  )
}


export default CruisesCard
