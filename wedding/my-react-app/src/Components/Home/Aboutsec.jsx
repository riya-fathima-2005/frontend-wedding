import React from "react";
import aboutimg from "../../assets/Images/wed5.jpg";
import "../../assets/Style/Aboutsec.css";

const Aboutsec = () => {
  return (

    <section className="about-section">

      <div className="container">

        <div className="row align-items-center">

          {/* IMAGE */}

          <div className="col-lg-6 mb-5 mb-lg-0">

            <div className="image-wrapper">

              <img
                src={aboutimg}
                alt="Indian Wedding"
                className="aboutimg"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="col-lg-6">

            <div className="about-content">

              <span className="sub-title">
                ABOUT US
              </span>

              <h3 className="about-heading">

                Experience The Beauty Of
                Indian Wedding Traditions

              </h3>

              <p className="about-para">

                India’s weddings are more than ceremonies —
                they are emotional celebrations filled with
                music, colors, traditions, and togetherness.

                We welcome travelers from around the world
                to become part of these unforgettable moments
                and experience authentic Indian culture from
                the inside.

              </p>

              <ul className="about-list">

                <li>Authentic cultural experiences</li>

                <li>Traditional music & celebrations</li>

                <li>Luxury wedding atmosphere</li>

                <li>Memories that last forever</li>

              </ul>

             

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default Aboutsec;