import React from 'react';
import campusBg from '../../assets/campus-hd.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${campusBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <span className="expanding-badge">
                Now Expanding
              </span>

              <h1 className="hero-title">
                The Future of Campus Printing is Here.
              </h1>

              <p className="hero-description">
                Join the network of high-performance automated print hubs. 
                Secure premium college campus locations and serve thousands of students daily 
                with our state-of-the-art Kiosks.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link to="/locations" className="btn-location">
                  View Available Locations
                  <span className="ms-2">→</span>
                </Link>

                <button className="btn-benefits">
                  Partner Benefits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
