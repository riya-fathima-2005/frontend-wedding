import React from "react";
import "../../assets/Style/Morevenue1.css";
import { Link } from "react-router-dom";

const VenueData = [

  {
    id: 4,

    title: "Golden Lotus Resort",

    location: "Udaipur, Rajasthan",

    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",

    description:
      "Elegant lakeside luxury resort offering royal architecture, premium hospitality, sunset wedding views, and sophisticated celebration spaces. Perfect for destination weddings with a blend of romance, tradition, and grandeur.",

    capacity: "1300 Guests",

    features: [
      "Royal Lake View",
      "Luxury Suites",
      "Grand Ballroom",
      "Wedding Planning Team",
      "Traditional Decor",
    ],
  },

];

function Morevenue4() {

  return (

    <section className="morevenue-page">

      {VenueData.map((venue) => (

        <div key={venue.id}>

          {/* HERO */}

          <div className="morevenue-hero">

            <img
              src={venue.image}
              alt={venue.title}
              className="morevenue-image"
            />

            <div className="morevenue-overlay">

              <div className="hero-content">

                <div className="hero-tag">
                  ROYAL LUXURY DESTINATION
                </div>

                <h1 className="morevenue-title">
                  {venue.title}
                </h1>

                <p className="morevenue-location">
                  {venue.location}
                </p>

                <div className="hero-buttons">

                  <Link to="/reserve">

                    <button className="hero-btn primary-btn">
                      Reserve Venue
                    </button>

                  </Link>

                  <button className="hero-btn secondary-btn">
                    Explore Gallery
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div className="container morevenue-content">

            <div className="main-card">

              <div className="top-grid">

                {/* LEFT */}

                <div>

                  <h2 className="content-heading">
                    About The Venue
                  </h2>

                  <p className="morevenue-description">
                    {venue.description}
                  </p>

                </div>

                {/* RIGHT */}

                <div className="info-card">

                  <h3>
                    Venue Details
                  </h3>

                  <p>
                    <strong>Capacity:</strong> {venue.capacity}
                  </p>

                  <ul>

                    {venue.features.map((feature, index) => (

                      <li key={index}>
                        {feature}
                      </li>

                    ))}

                  </ul>

                </div>

              </div>

              {/* BUTTON */}

              <Link to="/reserve">

                  <Link to="/venuegallary">
                    <button className="hero-btn secondary-btn">
                      Explore Gallery
                    </button>
                  </Link>

              </Link>

            </div>

          </div>

        </div>

      ))}

    </section>

  );
}

export default Morevenue4;