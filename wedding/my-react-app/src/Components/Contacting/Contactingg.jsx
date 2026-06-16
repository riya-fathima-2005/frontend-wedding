import React from "react";
import david from "../../assets/Images/medium.jpg";
import "../../assets/Style/Contactingg.css";
import wed7 from "../../assets/Images/ban5.png"

const Contactingg = () => {
  return (
    <div >

         {/* HERO BANNER */}
      <div className="imagesec">
        <img src={wed7} alt="decor" className="decore-img" />

        <div className="banner-overlay"></div>

        <h2 className="overlay-text">
          contact
        </h2>
      </div>
     

<div className="container py-5 contact-section">
      <div className="row g-4 align-items-center">
        
        <div className="col-md-6">
          <h2 className="contactedhead text-center">Contact</h2>
          <p className="contactedpara font" style={{fontFamily:"Poppins-sans-serif", fontSize:"20px"}}>
            Whether you’re dreaming of experiencing an authentic wedding as a
            guest, opening your own celebration to travelers from around the
            world, or simply curious to learn more about how it all works, we’d
            love to hear from you. Every message is a chance to connect cultures,
            share traditions, and create meaningful memories that go far beyond
            the ceremony itself.

          

          </p>
        </div>


        <div className="col-md-6 text-center">
          <img
            src={david}
            alt="David – Founder"
            className="contact-img"
          />
          <h3 className="founder-name">David</h3>
          <p className="founder-role">Founder</p>
          <p className="founder-location">India</p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Contactingg;
