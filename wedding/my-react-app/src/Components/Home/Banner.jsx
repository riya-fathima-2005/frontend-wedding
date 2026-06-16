import React from "react";
import background from "../../assets/Images/background-3.png";
import "../../assets/Style/Banner.css";

const Banner = () => {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* OVERLAY */}
      <div className="banner-overlay"></div>

      {/* CONTENT */}
      <div className="banner-side ">

        {/* TAG */}
        <div className="banner-tag">
          Luxury Wedding Experience
        </div>

        {/* HEADING */}
        <h1 className="heading-overlay">
          Create Your
        </h1>

        {/* SECOND HEADING */}
        <h2 className="heading-overlay">
          <span className="gold-text">
            Perfect Wedding
          </span>
        </h2>

        {/* SUB TEXT */}
        <p className="small-line">
          Beautiful Moments Begin Here....!
        </p>

        {/* BUTTON */}
        <a
          href="/wedding"
          className="faq-button text-decoration-none"
        >
          Explore Venues
        </a>

      </div>
    </section>
  );
};

export default Banner;