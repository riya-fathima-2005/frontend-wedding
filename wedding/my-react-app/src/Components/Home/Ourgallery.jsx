import React from "react";
import decor from "../../assets/Images/decor.jpg";
import wed1 from "../../assets/Images/wed1.jpg";
import wed2 from "../../assets/Images/wed2.jpg";
import wed3 from "../../assets/Images/wed3.jpg";

import "../../assets/Style/Ourgallery.css";
import { Link } from "react-router-dom";

const Ourgallery = () => {
  return (
    <div className="ourgallery-section">

      <div className="container py-5">

        {/* Heading */}
        <h2 className="text-center ourgallery ">
          Our Gallery
        </h2>

        {/* Subtitle */}
        <p className="text-center mb-5 oursub">
          Step inside our world of elegance and artistry.
          Explore real weddings and events curated by HoD,
          where every picture tells a story of love,
          beauty, and timeless celebration.
        </p>

        {/* Gallery */}
        <div className="gallery-wrapper">

          {/* Row 1 */}
          <div className="row g-4">

            <div className="col-lg-8 col-md-7 decor">
              <img
                src={decor}
                alt="decor"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-4 col-md-5 wed1">
              <img
                src={wed1}
                alt="wed1"
                className="img-fluid"
              />
            </div>

          </div>

          {/* Row 2 */}
          <div className="row g-4 mt-1">

            <div className="col-lg-4 col-md-5 wed2">
              <img
                src={wed2}
                alt="wed2"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-8 col-md-7 wed3">
              <img
                src={wed3}
                alt="wed3"
                className="img-fluid"
              />
            </div>

          </div>

        </div>

        {/* Button */}
        <div className="text-center mt-5">

          <Link to="/gallery">
            <button className="faq-button text-decoration-none btn-lg" >
              View Our Gallery
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Ourgallery;