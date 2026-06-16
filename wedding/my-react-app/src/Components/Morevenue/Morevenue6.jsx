import React from "react";
import "../../assets/Style/Morevenue1.css";
import { Link } from "react-router-dom";

const VenueData = [

  {
    id: 6,

    title: "Grand Palace",

    location: "Delhi, India",

    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200",

    description:
      "Grand Celebration Palace is a luxurious wedding destination designed for magnificent Indian celebrations with royal ambiance, elegant banquet halls, premium décor, sparkling lighting, and world-class hospitality. Perfect for lavish weddings, receptions, engagement ceremonies, and multicultural events, this palace delivers unforgettable experiences filled with grandeur, elegance, and timeless beauty.",

    capacity: "2000 Guests",

    features: [
      "Grand Banquet Hall",
      "Luxury Bridal Suite",
      "Premium Catering",
      "Royal Stage Setup",
      "Valet Parking",
    ],
  },

];

function Morevenue6() {

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
                  GRAND ROYAL DESTINATION
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

                <button className="book-btn">
                  Book Venue
                </button>

              </Link>

                                <Link to="/venuegallary">
                    <button className="hero-btn secondary-btn">
                      Explore Gallery
                    </button>
                  </Link>

            </div>

          </div>

        </div>

      ))}

    </section>

  );
}

export default Morevenue6;