import React from 'react'

const Home = () => {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-light">
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </article>
            <article className="tile is-child notification is-light">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-light">
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-light">
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <div className="content">
            </div>
          </article>
        </div>
      </div>
      <article className="tile is-child notification is-light">
        <p className="title">Vertical...</p>
        <p className="subtitle">Top tile</p>
      </article>
    </div>




  )
}

export default Home
