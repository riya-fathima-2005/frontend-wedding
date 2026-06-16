import React from "react";
import "../../assets/Style/Morevenue1.css";
import { Link } from "react-router-dom";

const VenueData = [

  {
    id: 3,

    title: "Lake View Garden",

    location: "Kerala, India",

    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200",

    description:
      "A peaceful lakeside wedding venue surrounded by lush greenery, calm waters, elegant floral décor, and natural beauty. Perfect for romantic outdoor ceremonies, traditional celebrations, and unforgettable wedding moments with a serene destination atmosphere.",

    capacity: "900 Guests",

    features: [
      "Lakeside Ceremony",
      "Garden Dining",
      "Luxury Decor",
      "Nature Photography Spots",
      "Traditional Kerala Catering",
    ],
  },

];

function Morevenue3() {

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
                  LAKESIDE DESTINATION VENUE
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

export default Morevenue3;