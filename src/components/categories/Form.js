import React from 'react'

const Form = ({ handleChange, handleSubmit, data, errors, ships }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name Of your Cruise</label>
        <div className="control">
          <input id="form-Input"
            className="input"
            name="name"
            placeholder="eg: Thailand & Vietnam"
            onChange={handleChange}
          />
        </div>
        {errors.name && <div className="help is-danger">{errors.name}</div>}
      </div>
      <div className="field">
        <label className="label">Region</label>
        <div className="control">
          <input id="form-Input"
            className="input"
            name="region"
            placeholder="eg: Thailand"
            onChange={handleChange}
          />
        </div>
        {errors.region && <div className="help is-danger">{errors.region}</div>}
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              name="image"
              placeholder="eg: https://secure.royalcaribbean.com/content/dam/royal/data/ports/key/key-west-florida-garden-party-parrot-jungle.jpg/jcr:content/renditions/375x200.jpg"
              onChange={handleChange}
              value={data.image || ''}
            />
          </div>
          {errors.image && <div className="help is-danger">{errors.image}</div>}
        </div>
        <div className="field">
          <label className="label">Write a short description</label>
          <div className="control">
            <input
              id="form-Input"
              className="textarea"
              name="descriptionshort"
              placeholder="Art Gallery"
              onChange={handleChange}
              value={data.descriptionshort || ''}
            />
          </div>
          {errors.descriptionshort && <div className="help is-danger">{errors.descriptionshort}</div>}
        </div>

        <div className="field">
          <label className="label">Select a ship</label>
          <div className="select">
            <select name="ship_id" value={data.ship_id} onChange={handleChange}>
              {ships.map(ship =>
                <option key={ship.id} value={ship.id}>{ship.ship}</option>
              )}
            </select>
          </div>
        </div>
      </div>
      <button className="buttonNew">Submit</button>
    </form>
  )
}

export default Form
