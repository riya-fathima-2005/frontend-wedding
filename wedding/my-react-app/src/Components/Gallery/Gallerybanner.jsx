import React from "react";
import wed7 from "../../assets/Images/banimgjpj.jpeg";

const Gallerybanner = () => {
  return (
    <div className="container abouts-section">
      
      {/* New Banner First */}
                <div className="banner-wrapper ">
                  <div className="banner-box">
                    <img src={wed7} alt="decor" className="decore-img" />
            
                    <div className="banner-overlay"></div>
            
                    <div className="banner-content">
                      <h2 style={{color:"white"}}>GALLERY</h2>
                    </div>
                  </div>
                </div>
    </div>
  );
};

export default Gallerybanner;
