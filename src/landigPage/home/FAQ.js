import React from "react";

function FAQ() {
  return (
    <section className="faq-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="faq-title fw-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">

            <div className="accordion" id="faqAccordion">

              <div className="accordion-item faq-card">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    What is the reservation fee?
                  </button>
                </h2>

                <div
                  id="faq1"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    The reservation fee is a nominal $500 deposit that secures
                    your exclusive right to a specific campus location for
                    30 calendar days. This fee is fully applicable toward your
                    initial franchise licensing costs.
                  </div>
                </div>
              </div>

              <div className="accordion-item faq-card">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    Is it adjustable?
                  </button>
                </h2>

                <div
                  id="faq2"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, you can swap your reserved location for any other
                    available spot on the platform within the first 7 days
                    without incurring additional fees.
                  </div>
                </div>
              </div>

              <div className="accordion-item faq-card">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    How long is it valid?
                  </button>
                </h2>

                <div
                  id="faq3"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    A standard reservation is valid for 30 days.
                    Extensions can be granted on a case-by-case basis.
                  </div>
                </div>
              </div>

              <div className="accordion-item faq-card">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Approval process?
                  </button>
                </h2>

                <div
                  id="faq4"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    After reservation, our team reviews your profile within
                    48 hours. Once pre-approved, we schedule a briefing to
                    walk you through the operational requirements.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;