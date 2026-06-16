import React from "react";
import "../../assets/Style/Morevenue1.css";
import { Link } from "react-router-dom";

const VenueData = [

  {
    id: 5,

    title: "Palm Shore Venue",

    location: "Kerala, India",

    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200",

    description:
      "A romantic tropical wedding venue surrounded by palm trees, open landscapes, serene backwaters, and peaceful natural beauty. Palm Shore Venue offers elegant outdoor ceremony spaces, premium hospitality, floral décor arrangements, luxury dining experiences, and a magical atmosphere perfect for intimate destination weddings and unforgettable celebrations in Kerala.",

    capacity: "850 Guests",

    features: [
      "Backwater View",
      "Outdoor Ceremony Space",
      "Luxury Dining Area",
      "Traditional Kerala Decor",
      "Photography Spots",
    ],
  },

];

function Morevenue5() {

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
                  TROPICAL DESTINATION VENUE
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
                  Book Venue
                </button>

              </Link>

            </div>

          </div>

        </div>

      ))}

    </section>

  );
}

export default Morevenue5;