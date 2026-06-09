import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName || user.email || "User";
        setIsLoggedIn(true);
        setUserName(name);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", name);
      } else {
        setIsLoggedIn(false);
        setUserName("");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar bg-white border-bottom shadow-sm py-3 fixed-top">
      <div className="container">

        <a className="navbar-brand" href="/">
          VPrint
        </a>

        <div className="navbar-content">

          <ul className="navbar-nav nav-menu">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/locations">Find Locations</Link></li>
            <li><Link className="nav-link" to="#how-it-works" onClick={(e) => {
    e.preventDefault();

    document
      .getElementById("how-it-works")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}>How it Works</Link></li>
            <li><Link className="nav-link" to="#faq" onClick={(e) => {
    e.preventDefault();

    document
      .getElementById("faq")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}>FAQ</Link></li>
            <li><Link className="nav-link" to="#priority-wait-list"
            onClick={(e) => {
    e.preventDefault();

    document
      .getElementById("priority-wait-list")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
            >Priority Wait List</Link></li>
          </ul>

          {!isLoggedIn ? (
            <div className="auth-buttons">
              <button className="btn btn-link"><Link to="/login">Login</Link> </button>
              <button className="btn signup-btn text-muted"><Link to="/signup">Sign Up</Link></button>
            </div>
          ) : (
            <div className="profile-menu">
  <button
    className="profile-btn"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    <img
      src={
        auth.currentUser?.photoURL ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt="Profile"
      className="profile-avatar"
    />
  </button>

  {showDropdown && (
    <div className="profile-dropdown">
      <div className="dropdown-header">
        <img
          src={
            auth.currentUser?.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="dropdown-avatar"
        />

        <h6>{userName}</h6>
      </div>

      <Link to="/profile" className="dropdown-item">
        Profile Details
      </Link>

      <Link to="/payments" className="dropdown-item">
        My Payments
      </Link>

      <Link to="/reservations" className="dropdown-item">
        My Reservations
      </Link>

      <button
        className="dropdown-item logout-item"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )}
</div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;