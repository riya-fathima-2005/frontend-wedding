import React from "react";
import wed7 from "../../assets/Images/ban1.png";
import "../../assets/Style/Weddingb.css";

const Weddingb = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="imagesec">
            <img src={wed7} alt="decor" className="decore-img" />

            <h2 className="overlay-text text-white">
              Wedding
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weddingb;