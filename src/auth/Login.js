import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!loginData.email || !loginData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Find user with matching email and password
      const user = users.find(
        u => u.email === loginData.email && u.password === loginData.password
      );

      if (!user) {
        setError("Invalid email or password.");
        setLoading(false);
        return;
      }

      // Set login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userEmail", user.email);

      // Handle redirect after login if priority access requested
      const redirect = localStorage.getItem("redirectAfterLogin");
      if (redirect === "priority-access") {
        localStorage.removeItem("redirectAfterLogin");
      }

      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to manage your reservations.</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
