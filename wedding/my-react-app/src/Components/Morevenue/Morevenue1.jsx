import React from "react";
import { Link } from "react-router-dom";
// import "../../assets/Style/Morevenue1.css";

const VenueData = [

  {
    id: 1,

    title: "Royal Palace Wedding Hall",

    location: "Jaipur, Rajasthan",

    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",

    description:
      "Experience timeless royal elegance in the heart of Jaipur. Royal Palace Wedding Hall offers luxurious interiors, grand chandeliers, spacious seating, and traditional Indian architecture perfect for destination weddings and receptions.",

    capacity: "1500 Guests",

    features: [
      "Luxury Ballroom",
      "Bridal Suite",
      "Premium Catering",
      "Valet Parking",
      "Stage Decoration",
    ],
  },

];

function Morevenue1() {

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
                  PREMIUM DESTINATION VENUE
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

                  <Link to="/venuegallary">
                    <button className="hero-btn secondary-btn">
                      Explore Gallery
                    </button>
                  </Link>

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
                  Reserve Your Venue
                </button>

              </Link>

            </div>

          </div>

        </div>

      ))}

    </section>

  );
}

export default Morevenue1;