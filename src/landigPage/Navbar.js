import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
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
            <li><Link className="nav-link" to="/">Find Locations</Link></li>
            <li><Link className="nav-link" to="/">How it Works</Link></li>
            <li><Link className="nav-link" to="/">Benefits</Link></li>
            <li><Link className="nav-link" to="/">FAQ</Link></li>
          </ul>

          {!isLoggedIn ? (
            <div className="auth-buttons">
              <button className="btn btn-link"><Link to="/login">Login</Link> </button>
              <button className="btn signup-btn text-muted"><Link to="/signup">Sign Up</Link></button>
            </div>
          ) : (
            <div className="profile-menu">
              <span className="profile-name">
                👤 {userName}
              </span>

              <button
                className="btn btn-link text-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;