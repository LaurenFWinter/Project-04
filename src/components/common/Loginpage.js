import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <section>
      <div className="hero is-fullheight">
        <div className="hero-body hero-image" style={{ backgroundImage: 'url(images/asia.jpg)' }}>
          <div className="container">
            <div>
              <h1 className="title2">Voyage.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="hero is-medium">
        <div className="hero-body hero-image" style={{ backgroundImage: 'url(http://www.mundomarcruceros.com/img/Fotos-Landing/Asia-1600x650.jpg)' }}>
          <div className="container">
            <div>
              <h1 className="title2">Our Travel Inspiration</h1>
            </div>
          </div>
        </div>
      </div>
      <p className="flexinline"> <Link to={'/cruises'}> Search By Cruise </Link></p>
      <p className="flexinline"> <Link to={'/categories'}> Search By Destinations </Link></p>
      <p className="flexinline"> <Link to={'/ships'}>Search By Ship</Link></p>
      <p className="flexinline"> <Link to={'/cruises/new'}>Make your own Cruise</Link></p>
      <div className="imagesLoginpage columns">
        <Link to={'/cruises'} className="column is-one-quarter">
          <figure className="image is-3by2">
            <img src="images/route.jpg" alt="route" />
          </figure>
        </Link>
        <Link to={'/categories'} className="column is-one-quarter">
          <figure className="image is-3by2">
            <img src="https://www.royalcaribbean.co.uk/assets/images/holiday-destinations/region-module/rccl_regionModule9.jpg" alt="route" />
          </figure>
        </Link>
        <Link to={'/ships'} className="column is-one-quarter">
          <figure className="image is-3by2">
            <img src="https://images.cruisecritic.com/image/5441/image_1000x_43.jpg" alt="route" />
          </figure>
        </Link>
        <Link to={'/cruises/new'} className="column is-one-quarter">
          <figure className="image is-3by2">
            <img src="images/sign.jpg" alt="route" />
          </figure>
        </Link>
      </div>
    </section>
  )
}

export default Loginpage
