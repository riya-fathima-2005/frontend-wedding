import React from "react";
import wed7 from "../../assets/Images/banimgjpj.jpeg";
import "../../assets/Style/Weddingb.css";

const Weddingb = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-box">
        <img src={wed7} alt="decor" className="decore-img" />

        <div className="banner-overlay"></div>

        <div className="banner-content">
          <h2>Wedding</h2>
        </div>
      </div>
    </div>
  );
};

export default Weddingb;