import React from "react";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

function ContactSection() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-12 col-lg-5">

            <h2 className="contact-title">
              Ready to Start?
            </h2>

            <p className="contact-description">
              Our franchise consultants are standing by to help you
              navigate the reservation process. Get in touch for a
              personalized campus ROI analysis.
            </p>

            <div className="contact-info">

              <div className="contact-item">
                <div className="contact-icon">
                  <BsEnvelopeFill />
                </div>

                <div>
                  <small>EMAIL US</small>
                  <h4>partners@vprint.com</h4>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <BsTelephoneFill />
                </div>

                <div>
                  <small>CALL SUPPORT</small>
                  <h4>1-800-VPRINT-NOW</h4>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="col-12 col-lg-7">

            <div className="contact-form-card">

              <form>

                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-submit w-100"
                    >
                      Send Message
                    </button>
                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;