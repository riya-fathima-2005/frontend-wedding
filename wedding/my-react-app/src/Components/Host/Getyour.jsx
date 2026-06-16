import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import bannerImage from "../../assets/Images/hoastpic.png";
import "../../assets/Style/Getready.css";

const GetYourGuests = () => {
  return (
    <div className="hero-banner ">
      <img src={bannerImage} alt="Wedding celebration" className="banner-img" />

      <div className="overlay">
        <div className="overlay-content">
          <h1 style={{marginLeft: "100px", marginBottom: "30px", fontSize: "40px", fontWeight: "bold"}}>Get ready to meet your guests!!</h1>

          <div className="text-center py-3">
            <Link to="/howhost" className="faq-button text-decoration-none">
              Register Your Wedding
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetYourGuests;
