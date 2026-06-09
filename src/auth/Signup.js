import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiUser, HiMail, HiLockClosed, HiPhone, HiLocationMarker, HiArrowRight } from "react-icons/hi";

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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password || !formData.name) {
      setError("Name, email, and password are required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setLoading(true);
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some(user => user.email === formData.email)) {
        setError("This email is already registered.");
        setLoading(false);
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        city: formData.city || "",
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", formData.name);
      localStorage.setItem("userEmail", formData.email);

      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Failed to create an account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card border-0" style={{ maxWidth: '500px' }}>
        <div className="text-center mb-5">
          <div className="bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '64px', height: '64px' }}>
            <HiUser size={32} />
          </div>
          <h2 className="fw-bold h1">Create Account</h2>
          <p className="text-muted">Start your journey as a VPrint partner today.</p>
        </div>

        {error && <div className="auth-error rounded-3 border-0 shadow-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="row g-3">
            <div className="col-12">
              <div className="position-relative">
                <HiUser className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={20} />
                <input type="text" name="name" className="w-100 ps-5" placeholder="Full Name" onChange={handleChange} required />
              </div>
            </div>
            <div className="col-12">
              <div className="position-relative">
                <HiMail className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={20} />
                <input type="email" name="email" className="w-100 ps-5" placeholder="Email Address" onChange={handleChange} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative">
                <HiPhone className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={20} />
                <input type="tel" name="phone" className="w-100 ps-5" placeholder="Phone Number" onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative">
                <HiLocationMarker className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={20} />
                <input type="text" name="city" className="w-100 ps-5" placeholder="City" onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative">
                <HiLockClosed className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={20} />
                <input type="password" name="password" className="w-100 ps-5" placeholder="Password" onChange={handleChange} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative">
                <HiLockClosed className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={20} />
                <input type="password" name="confirmPassword" className="w-100 ps-5" placeholder="Confirm Password" onChange={handleChange} required />
              </div>
            </div>
          </div>

          <button type="submit" className="auth-btn py-3 d-flex align-items-center justify-content-center gap-2 border-0 shadow-lg mt-3" disabled={loading}>
            {loading ? "Creating account..." : <>Create Account <HiArrowRight /></>}
          </button>
        </form>

        <div className="text-center mt-5">
          <p className="text-muted small">
            Already have an account? <Link to="/login" className="text-primary fw-bold text-decoration-none">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;