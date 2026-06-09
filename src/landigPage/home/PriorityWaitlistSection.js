import React, { useState } from "react";
import PriorityModal from "./PriorityModal";

function PriorityWaitlistSection() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id ="priority-wait-list" className="priority-section">

        <div className="container">

          <h2 className="priority-title">
            Get Priority Access To Premium Locations
          </h2>

          <p className="priority-description">
            Reserve your place in the queue and get
            first access to the best VPrint campus locations.
          </p>

          <button
            className="priority-btn"
            onClick={() => setShowModal(true)}
          >
            Join Priority Waitlist ₹499
          </button>

        </div>

      </section>

      {showModal && (
        <PriorityModal
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default PriorityWaitlistSection;