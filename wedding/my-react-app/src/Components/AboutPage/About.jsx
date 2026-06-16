import React from "react";
import decore from "../../assets/Images/decor.jpg";
import "../../assets/Style/Aboutbanner.css"

const About = () => {
  return (

    <section className="about-wrapper">

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* IMAGE */}

          <div className="col-lg-6">

            <div className="about-image-box">

              <img
                src={decore}
                alt="Wedding"
                className="about-image"
              />

              <div className="image-overlay"></div>

            </div>

          </div>

          {/* CONTENT */}

          <div className="col-lg-6">

            <div className="about-content">

              <span className="about-tag">
                WELCOME TO INDIAN WEDDINGS
              </span>

              <h1>
                Experience The Magic Of
                <span> Indian Celebrations</span>
              </h1>

              <p>
                India’s weddings are not just ceremonies —
                they are unforgettable celebrations filled with
                love, music, traditions, emotions, and togetherness.
                We invite travelers from around the world to become
                part of these vibrant moments.
              </p>

              <p>
                From colorful Haldi ceremonies to energetic Baraat
                dances and royal receptions, every experience is
                designed to make you feel like family.
              </p>

              {/* FEATURES */}

              <div className="about-features">

                <div className="feature-card">
                  <h5>✨ Cultural Experience</h5>
                  <p>Live authentic Indian wedding traditions.</p>
                </div>

                <div className="feature-card">
                  <h5>💃 Dance & Celebration</h5>
                  <p>Enjoy music, dance, and joyful moments.</p>
                </div>

                <div className="feature-card">
                  <h5>📸 Lifetime Memories</h5>
                  <p>Create unforgettable memories with families.</p>
                </div>

                <div className="feature-card">
                  <h5>👗 Traditional Styling</h5>
                  <p>Dress in beautiful Indian wedding outfits.</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default About;