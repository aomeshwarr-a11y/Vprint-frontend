import React, { useState } from "react";
import { FaCheck, FaBolt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PriorityModal({ onClose }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePriorityAccess = async () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "priority-access");
      alert("Please login to get Priority Access.");
      navigate("/login");
      return;
    }

    setLoading(true);

    try {
      // Load Razorpay script
      const res = await loadRazorpayScript();

      if (!res) {
        alert("Failed to load Razorpay. Please check your internet connection.");
        setLoading(false);
        return;
      }

      // Get user details
      const userName = localStorage.getItem("userName");
      const userEmail = localStorage.getItem("userEmail");

      // Razorpay options
      const options = {
        key: "rzp_test_1DP5mmOlF23erer", // Replace with your Razorpay Key ID
        amount: 49900, // Amount in paise (₹499 = 49900 paise)
        currency: "INR",
        name: "VPrint - Priority Access",
        description: "Priority Waitlist Membership - ₹499",
        prefill: {
          name: userName || "User",
          email: userEmail || "",
        },
        handler: function (response) {
          // Payment successful
          localStorage.setItem("priorityMember", "true");
          localStorage.setItem("paymentId", response.razorpay_payment_id);
          localStorage.setItem("paymentDate", new Date().toISOString());

          alert("Priority Membership Activated! Payment ID: " + response.razorpay_payment_id);
          onClose();
          setLoading(false);
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
        theme: {
          color: "#FF9500",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your payment. Please try again.");
      setLoading(false);
    }
  };

  const handleFreeWaitlist = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "free-waitlist");
      alert("Please login to join the waitlist.");
      navigate("/login");
      return;
    }

    // Save free waitlist status
    localStorage.setItem("freeWaitlistMember", "true");
    localStorage.setItem("waitlistDate", new Date().toISOString());

    alert("Successfully joined the Free Waitlist!");
    onClose();
  };

  return (
    <div className="priority-modal-overlay">

      <div className="priority-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <p className="modal-label">
          INVESTOR WAITLIST
        </p>

        <h2>
          Choose how you want in
        </h2>

        <p className="modal-description">
          Both options are free to join. Priority gives you
          guaranteed first access to premium VPrint campus
          locations before public release.
        </p>

        <table className="comparison-table">

          <thead>
            <tr>
              <th>Feature</th>
              <th>Free Waitlist</th>
              <th className="priority-column">
                ⚡ Priority Waitlist
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Join investor queue</td>
              <td><FaCheck /></td>
              <td><FaCheck /></td>
            </tr>

            <tr>
              <td>Slot confirmed on availability</td>
              <td><FaCheck /></td>
              <td><FaCheck /></td>
            </tr>

            <tr>
              <td>Guaranteed slot before launch</td>
              <td>—</td>
              <td><FaCheck /></td>
            </tr>

            <tr>
              <td>First pick of locations</td>
              <td>—</td>
              <td><FaCheck /></td>
            </tr>

            <tr>
              <td>Dedicated onboarding support</td>
              <td>—</td>
              <td><FaCheck /></td>
            </tr>

            <tr>
              <td>₹499 adjusted against setup fee</td>
              <td>—</td>
              <td><FaCheck /></td>
            </tr>

            <tr>
              <td>Queue Position</td>
              <td>After Priority Members</td>
              <td className="priority-text">
                Front Of Queue
              </td>
            </tr>

            <tr>
              <td>Cost To Join</td>
              <td>Free</td>
              <td className="priority-text">
                ₹499
              </td>
            </tr>

          </tbody>

        </table>

        <div className="modal-buttons">

          <button 
            className="free-btn"
            onClick={handleFreeWaitlist}
          >
            Join Free Waitlist
          </button>

          <button
            className="priority-pay-btn"
            onClick={handlePriorityAccess}
            disabled={loading}
          >
            <FaBolt />
            {loading ? "Processing..." : "Get Priority Access ₹499"}
          </button>

        </div>

        <p className="modal-note">
          ₹499 will be adjusted against your final
          franchise setup fee.
        </p>

      </div>

    </div>
  );
}

export default PriorityModal;