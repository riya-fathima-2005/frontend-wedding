import React from "react";
import wed7 from "../../assets/Images/banimgjpj.jpeg";
import "../../assets/Style/Open.css";
import { Link } from "react-router-dom";

const Open = () => {
  return (
    <div className="banner-wrapper">

      <div className="banner-box">
        <img src={wed7} alt="banner" className="decore-img" />

        <div className="banner-overlay"></div>

        {/* small card inside banner */}
        <div className="content-card">

          <h2 className="banner-title" style={{fontSize:"35px"}}>
            BECOME A HOST
          </h2>

          <p className="banner-text">
            Join hands, share smiles, and welcome the world to your special day.
          </p>

          <Link
            to="/howhost"
            className="faq-button text-decoration-none"
          >
            Register Your Wedding
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Open;