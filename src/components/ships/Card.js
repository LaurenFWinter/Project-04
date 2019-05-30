import React from 'react'

const Card = ({ region, activities }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{region}</h3>
        <h3 className="card-header-title">{activities}</h3>
      </div>
    </div>
  )
}

export default Card
