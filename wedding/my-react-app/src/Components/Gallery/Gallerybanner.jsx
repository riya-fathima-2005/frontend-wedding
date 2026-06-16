import React from "react";
import rose from "../../assets/Images/rose.jpg";

const Gallerybanner = () => {
  return (
    <div className="container abouts-section">
      <div className="row">
        <div className="col-12">
          <div className="img-container">
            <img src={rose} alt="decor" className="decore-img" />
            <h2 className="overlay-text text-white">Gallery</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerybanner;
