import React from "react";
import { FaCheck, FaBolt, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PriorityModal({ onClose }) {
    const navigate = useNavigate();

  const handlePriorityAccess = () => {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {

    localStorage.setItem(
      "redirectAfterLogin",
      "priority-access"
    );

    alert(
      "Please login to get Priority Access."
    );

    
navigate("/login");

    return;
  }

  // Temporary until Razorpay is added

  localStorage.setItem(
    "priorityMember",
    "true"
  );

  alert("Priority Membership Activated!");

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

          <button className="free-btn">
            Join Free Waitlist
          </button>

          <button
            className="priority-pay-btn"
            onClick={handlePriorityAccess}
          >
            <FaBolt />
            Get Priority Access ₹499
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