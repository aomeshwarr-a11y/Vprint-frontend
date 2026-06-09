import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("userName", formData.name);

const redirect =
  localStorage.getItem("redirectAfterLogin");

if (redirect === "priority-access") {

  localStorage.removeItem(
    "redirectAfterLogin"
  );

  navigate("/");

} else {

  navigate("/");
}
};
  

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Reserve premium VPrint franchise locations.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;