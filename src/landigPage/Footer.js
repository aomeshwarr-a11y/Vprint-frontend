import React from "react";
import { BsShare, BsGlobe } from "react-icons/bs";
import "../index.css";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row gy-5">

          {/* Logo Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h2 className="footer-logo">VPrint</h2>

            <p className="footer-text">
              Revolutionizing campus services through smart kiosk
              technology and empowered franchise owners.
            </p>
          </div>

          {/* Platform */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="footer-heading">
              PLATFORM
            </h6>

            <ul className="footer-links">
              <li><a href="/">Find Locations</a></li>
              <li><a href="/">How It Works</a></li>
              <li><a href="/">Benefits</a></li>
              <li><a href="/">Franchise FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="footer-heading">
              LEGAL
            </h6>

            <ul className="footer-links">
              <li><a href="/">Terms of Service</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Contact Support</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-12 col-lg-3">
            <h6 className="footer-heading">
              CONNECT
            </h6>

            <div className="d-flex gap-3 mt-3">

              <a href="/" className="social-icon">
                <BsShare />
              </a>

              <a href="/" className="social-icon">
                <BsGlobe />
              </a>

            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="row align-items-center">

          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="copyright-text">
              © 2024 VPrint Franchise Systems. All rights reserved.
            </p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="copyright-text">
              Made for the Future of Learning
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;