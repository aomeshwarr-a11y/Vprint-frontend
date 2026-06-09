import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-2">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-primary" href="/">
          VPrint
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">

          {/* Center Menu */}
          <ul className="navbar-nav mx-auto align-items-lg-center">

            <li className="nav-item mx-lg-2">
              <Link className="nav-link active-nav" to="/">
                Find Locations
              </Link>
            </li>

            <li className="nav-item mx-lg-2">
              <Link className="nav-link" to="/">
                How it Works
              </Link>
            </li>

            <li className="nav-item mx-lg-2">
              <Link className="nav-link" to="/">
                Benefits
              </Link>
            </li>

            <li className="nav-item mx-lg-2">
              <Link className="nav-link" to="/">
                FAQ
              </Link>
            </li>

          </ul>

          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <button className="btn btn-link text-dark text-decoration-none">
              Login
            </button>

            <button className="btn signup-btn">
              Sign Up
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;