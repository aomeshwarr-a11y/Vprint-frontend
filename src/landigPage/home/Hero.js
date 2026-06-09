import React from 'react';
import campusBg from '../../assets/campus-hd.png';
import { Link } from 'react-router-dom';

function Hero() {
  return (
   <section
      className="hero-section mt-3 mb-5"
      style={{
        backgroundImage: `url(${campusBg})`,
      }}
    >
      <div className="hero-overlay"></div>

       <div className="container position-relative">
        <div className="row min-vh-100 align-items-center">
          <div className="col-12 col-md-10 col-lg-7 col-xl-6">

            <span className="expanding-badge fs-14 fw-bold text-uppercase">
              NOW EXPANDING
            </span>

            <h1 className="hero-title mt-4 fs-1 fw-bold">
              Reserve Your VPrint Kiosk Location
            </h1>

            <p className="hero-description mt-4 fs-5">
              Secure premium college campus locations before they are taken.
              Join the network of high-performance automated print hubs
              serving thousands of students daily.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-5 fs-1">
              <button className="btn-location">
                <Link to="/locations">View Available Locations</Link>
                <span className="ms-3">→</span>
              </button>

              <button className="btn-benefits">
                Partner Benefits
              </button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
