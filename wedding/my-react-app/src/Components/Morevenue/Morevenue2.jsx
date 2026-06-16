import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Style/Morevenue1.css";

const VenueData = [
  {
    id: 2,

    title: "Sea Breeze Resort",

    location: "Goa, India",

    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",

    description:
      "Experience breathtaking beachside luxury at Sea Breeze Resort in Goa, a stunning destination wedding venue surrounded by golden sunsets, ocean breeze, elegant décor, and romantic coastal beauty. Designed for unforgettable celebrations, this premium resort offers luxurious event spaces, beautiful outdoor ceremony areas, world-class hospitality, customized décor arrangements, and a magical ambiance perfect for destination weddings, receptions, engagement ceremonies, and intimate luxury celebrations by the sea.",

    capacity: "1200 Guests",

    features: [
      "Beachside Mandap",
      "Luxury Guest Rooms",
      "Sunset Ceremony Area",
      "Premium Catering",
      "Private Pool Access",
    ],
  },
];

function Morevenue2() {

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
                  BEACH DESTINATION VENUE
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

export default Morevenue2;