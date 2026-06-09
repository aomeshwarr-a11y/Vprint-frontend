import React from 'react';
import {
  BsMap,
  BsCursor,
  BsCashStack,
  BsClipboardCheck,
  BsLockFill,
} from "react-icons/bs";

import campusImg from "../../assets/collage.jpeg";

function HowItWork() {
    const steps = [
    {
      id: 1,
      icon: <BsMap />,
      title: "Browse Locations",
      desc: "Explore our curated list of high-traffic student hubs and library clusters.",
    },
    {
      id: 2,
      icon: <BsCursor />,
      title: "Select Location",
      desc: "Review detailed footprint analytics and select the spot that fits your goals.",
    },
    {
      id: 3,
      icon: <BsCashStack />,
      title: "Pay Reservation Fee",
      desc: "Secure your priority with a low-cost, refundable reservation deposit.",
    },
    {
      id: 4,
      icon: <BsClipboardCheck />,
      title: "Complete Process",
      desc: "Finalize the franchise agreement and prepare for deployment.",
    },
  ];
  return (
   <section className="how-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">How It Works</h2>
          <div className="title-line mx-auto"></div>
        </div>

        <div className="row g-4 mb-5">
          {steps.map((step) => (
            <div key={step.id} className="col-12 col-sm-6 col-lg-3">
              <div className="step-card">

                <div className="icon-wrapper">
                  {step.icon}
                  <span className="step-number">
                    {step.id}
                  </span>
                </div>

                <h4 className="step-title">
                  {step.title}
                </h4>

                <p className="step-desc">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">

          <div className="col-lg-8">
            <div className="opportunity-card">

              <img
                src={campusImg}
                alt="Campus"
                className="img-fluid opportunity-img"
              />

              <div className="opportunity-overlay">
                <h2 className="fw-bold">
                  Campus-Focused Opportunity
                </h2>

                <p>
                  Unlock recurring revenue streams by placing
                  automated print kiosks in the most coveted
                  student traffic zones in the nation.
                </p>
              </div>

            </div>
          </div>

          <div className="col-lg-4">
            <div className="reservation-card h-100">

              <div className="lock-icon">
                <BsLockFill />
              </div>

              <h3 className="fw-bold mt-4">
                Exclusive reservation
              </h3>

              <p className="mt-3">
                Once you reserve a spot, it's locked to your account
                for 30 days while you review the paperwork.
              </p>

            </div>
            
          </div>
          <div className="row g-4 mb-5">

  <div className="col-lg-4">
    <div className="feature-card h-100">

      <div className="feature-icon">
        🔗
      </div>

      <h3>Easy process</h3>

      <p>
        No complex legal hurdles. Our streamlined
        digital portal manages everything from fee
        to fulfillment.
      </p>

    </div>
  </div>

  <div className="col-lg-8">
    <div className="feature-card tracking-card h-100">

      <div>
        <h2>Transparent tracking</h2>

        <p>
          Real-time status updates on your application.
          Watch your kiosk move through approval,
          logistics, and installation on our
          interactive map.
        </p>
      </div>

      <div className="status-card">

        <div className="d-flex justify-content-between align-items-center">
          <span className="status-title">
            LIVE STATUS
          </span>

          <span className="status-dot"></span>
        </div>

        <div className="progress mt-3">
          <div
            className="progress-bar"
            style={{ width: "66%" }}
          ></div>
        </div>

        <small className="d-block mt-2">
          66% Progress — Installation Scheduled
        </small>

      </div>

    </div>
  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default HowItWork;