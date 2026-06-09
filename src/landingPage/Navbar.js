import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check login state from localStorage
  useEffect(() => {
    const isLoggedInValue = localStorage.getItem("isLoggedIn") === "true";
    const userName = localStorage.getItem("userName");
    
    if (isLoggedInValue && userName) {
      setIsLoggedIn(true);
      setUserName(userName);
    } else {
      setIsLoggedIn(false);
      setUserName("");
    }
  }, []);


// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link className="navbar-brand" to="/">
            VPrint
          </Link>

          <ul className="nav-menu">
            <li><NavLink className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"} to="/" end>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link active-nav" : "nav-link"} to="/locations">Locations</NavLink></li>
            <li><Link className="nav-link" to="/" onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate('/');
                setTimeout(() => {
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}>Process</Link></li>
            <li><Link className="nav-link" to="/" onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname === '/') {
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate('/');
                setTimeout(() => {
                  document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}>FAQ</Link></li>
          </ul>

          <div className="auth-buttons">
            {!isLoggedIn ? (
              <>
                <Link className="login-btn" to="/login">Login</Link>
                <Link className="signup-btn" to="/signup">Get Started</Link>
              </>
            ) : (
              <div className="profile-menu" ref={dropdownRef}>
                <button
                  className="profile-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="Profile"
                    className="profile-avatar"
                  />
                </button>

                {showDropdown && (
                  <div className="profile-dropdown">
                    <div className="dropdown-header">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="Profile"
                        className="dropdown-avatar"
                      />
                      <h6>{userName}</h6>
                    </div>
                    <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>Profile</Link>
                    <Link to="/payments" className="dropdown-item" onClick={() => setShowDropdown(false)}>Payments</Link>
                    <Link to="/reservation" className="dropdown-item" onClick={() => setShowDropdown(false)}>Reservations</Link>
                    <button className="dropdown-item logout-item" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;