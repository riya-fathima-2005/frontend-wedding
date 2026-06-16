import React from "react";
import "../../assets/Style/Howhost.css";

const Howhost = () => {
const steps = [
  {
    number: "01",
    title: "Reserve Your Venue",
    description:
      "Choose and reserve your preferred venue space to begin the hosting process.",
  },
  {
    number: "02",
    title: "Add Venue Details",
    description:
      "Provide venue information, pricing, capacity, facilities, and photos.",
  },
  {
    number: "03",
    title: "Complete Registration",
    description:
      "Fill in the required details and submit your wedding registration.",
  },
  {
    number: "04",
    title: "Contribute Payment",
    description:
      "Make the contribution payment to activate and verify your wedding profile.",
  },
  {
    number: "05",
    title: "View Your Wedding",
    description:
      "Once approved, your wedding profile will appear in the Wedding section.",
  },
  {
    number: "06",
    title: "Share & Celebrate",
    description:
      "Invite friends and family to view your wedding details and celebrate your special day.",
      
  },
];

  return (
    <section className="howhost-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="host-subtitle">Simple & Elegant Process</p>

          <h2 className="howhost-heading">
            How Hosting Works
          </h2>
        </div>

        <div className="host-grid">

          {steps.map((step) => (
            <div className="host-card" key={step.number}>

              <div className="host-number">
                {step.number}
              </div>

              <h3 className="step-title">
                {step.title}
              </h3>

              <p className="step-description">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Howhost;