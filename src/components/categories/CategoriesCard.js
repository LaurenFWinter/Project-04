import React from 'react'

const CategoriesCard = ({ image, name, descriptionShort  }) => {

  console.log
  return (


    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
          </div>
        </div>
        <div className="content">{descriptionShort}</div>
      </div>
    </div>
  )
}

export default CategoriesCard
