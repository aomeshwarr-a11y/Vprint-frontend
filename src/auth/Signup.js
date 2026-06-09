import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

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

<<<<<<< HEAD
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      // Update display name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      // Save user details to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "",
        city: formData.city || "",
        createdAt: new Date().toISOString(),
      });

      // Synchronize cache
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", formData.name);

      navigate("/");
    } catch (err) {
      console.error("Signup error:", err);
      let errMsg = "Failed to create an account. Please try again.";
      if (err.code === "auth/email-already-in-use") {
        errMsg = "This email is already registered.";
      } else if (err.code === "auth/invalid-email") {
        errMsg = "Invalid email address format.";
      } else if (err.code === "auth/weak-password") {
        errMsg = "The password is too weak. Please use at least 6 characters.";
      }
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

=======
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
>>>>>>> 500509d5de46df984cdf6ab4fcf2206eb8103f90
  

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Reserve premium VPrint franchise locations.</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
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
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;