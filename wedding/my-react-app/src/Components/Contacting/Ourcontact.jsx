import React, { useState } from "react";

import "../../assets/Style/Ourcontact.css";
import wed7 from "../../assets/Images/banimgjpj.jpeg"

function Ourcontact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://wedding-book.onrender.com/api/contact/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    alert(data.message);

    setFormData({
      fullname: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.log(error);
    alert("Failed to Send Message");
  }
};

  return (
    <section>

          {/* New Banner First */}
          <div className="banner-wrapper">
            <div className="banner-box">
              <img src={wed7} alt="decor" className="decore-img" />
      
              <div className="banner-overlay"></div>
      
              <div className="banner-content">
                <h2 style={{marginTop:"200px"}}>CONTACT</h2>
                <p style={{marginTop:"120px", marginLeft:"355px", fontSize:"35px", fontFamily:"Cormorant Garamond, serif"}}>HOME / CONTACT</p>
              </div>
            </div>
          </div>
      
      {/* TOP AREA */}
<div  className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <p className="hero-mini-title">WEDDING CONTACT</p>

          <h3 className="hero-title">
            Plan Your <span>Perfect</span>
            <br />
            Celebration
          </h3>

          <p className="hero-description">
            Let us help you create timeless wedding memories filled with
            elegance, culture, and unforgettable joy.
          </p>
        </div>
      </div>

      {/* CONTACT BOX */}

      <div className="container contact-wrapper">
        {/* LEFT CARD */}

        <div className="contact-info-card">
          <h4>Get In Touch</h4>

          <p className="info-text">
            We’d love to hear from you! Reach out to us for wedding planning,
            collaborations, or inquiries.
          </p>

          {/* EMAIL */}

          <div className="info-item">
            <div className="icon-box">
              <i className="bi bi-envelope-fill"></i>
            </div>

            <div>
              <h5>Email Us</h5>

              <a href="mailto:purewed@gmail.com">purewed@gmail.com</a>
            </div>
          </div>

          {/* SERVICES */}

          <div className="info-item">
            <div className="icon-box">
              <i className="bi bi-geo-alt-fill"></i>
            </div>

            <div>
              <h5>Our Services</h5>

              <p>
                Luxury Weddings <br />
                Destination Events <br />
                Traditional Celebrations
              </p>
            </div>
          </div>

          {/* SOCIAL */}

          <div className="info-item">
            <div className="icon-box">
              <i className="bi bi-people-fill"></i>
            </div>

          <div>
  <h5>Follow Us</h5>

  <div className="social-icons">

    {/* INSTAGRAM */}

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-instagram"></i>
    </a>

    {/* FACEBOOK */}

    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-facebook"></i>
    </a>

    {/* PINTEREST WEDDING DRESSES */}

    <a
      href="https://in.pinterest.com/search/pins/?q=wedding%20dress"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-pinterest"></i>
    </a>

  </div>
</div>
          </div>
        </div>

        {/* RIGHT FORM */}

        <div className="contact-form-card">
          <h4>Send Us a Message</h4>

          <div className="title-line"></div>

          <form onSubmit={handleSubmit}>
            <div className="double-input">
              {/* NAME */}

              <div className="input-box">
                <i className="bi bi-person"></i>

                <input
                  type="text"
                  name="fullname"
                  placeholder="Your Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMAIL */}

              <div className="input-box">
                <i className="bi bi-envelope"></i>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* PHONE */}

            <div className="input-box">
              <i className="bi bi-telephone"></i>

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}

            <div className="input-box textarea-box">
              <i className="bi bi-pencil"></i>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* BUTTON */}

            <button type="submit" className="send-btn">
              Send Message
              <i className="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Ourcontact;
