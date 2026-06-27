import React from "react";
import "../../assets/Style/Howhost.css";

const Howhost = () => {
  const steps = [
    {
  number: "01",
  title: "Reserve Your Venue",
  description:
    "Choose and reserve your preferred venue space to begin your hosting journey.",
},
{
  number: "02",
  title: "Add Venue Details",
  description:
    "Provide venue details including pricing, guest capacity, facilities, and photos.",
},
{
  number: "03",
  title: "Complete Registration",
  description:
    "Fill in all required information and submit your hosting registration.",
},
{
  number: "04",
  title: "Get Approved",
  description:
    "Our team reviews your submission and approves your wedding hosting profile.",
},
{
  number: "05",
  title: "Share & Celebrate",
  description:
    "Your wedding is now live for guests to explore, join, and celebrate with you.",
}
  ];

  return (
    <section className="howhost-section">
      <div className="container">

        <div className="text-center heading-area">
          <p className="host-subtitle">Simple & Elegant Process</p>
          <h2 className="howhost-heading">How Hosting Works</h2>
        </div>

        <div className="host-grid">
          {steps.map((step) => (
            <div className="host-card" key={step.number}>

              <div className="diamond-box">
                <span>{step.number}</span>
              </div>

              <h3 className="step-title">{step.title}</h3>

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