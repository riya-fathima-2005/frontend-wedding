import React, {
  useEffect,
  useState
} from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import "../../assets/Style/Morevenue1.css";

const Morevenueside = () => {

  const { id } = useParams();

  const [venue, setVenue] =
    useState(null);

  const API_URL = "https://wedding-book.onrender.com"

  useEffect(() => {

    const fetchVenue =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const response =
            await fetch(

              `${API_URL}/api/venues/`,

              {
                headers: {
                  Authorization:
                    `Bearer ${token}`
                }
              }

            );

          const data =
            await response.json();

          const selectedVenue =
            data.find(

              (item) =>
                String(item.id) ===
                String(id)

            );

          setVenue(
            selectedVenue
          );

        } catch (error) {

          console.log(error);

        }

      };

    fetchVenue();

  }, [id]);

  if (!venue) {

    return (

      <div className="loading-page">

        <h2>
          Loading Venue...
        </h2>

      </div>

    );

  }

  return (

<div className="split-page">

  <div className="split-card">

    {/* LEFT IMAGE */}

    <div className="split-image-section">

      <img
        src={`${API_URL}${venue.image}`}
        alt={venue.name}
        className="split-image"
      />

    </div>

    {/* RIGHT CONTENT */}

    <div className="split-content">

  <h1 className="split-title">
    {venue.name}
  </h1>

  <p className="split-location">
    📍 {venue.location}
  </p>

  <h4 className="split-couple">
    💍 {venue.bride_name} & {venue.groom_name}
  </h4>
     
    <div>
  <h2 className="split-price">
    ₹ {venue.price}
  </h2>

  <div className="split-status">
    {venue.status === "Available" ? (
      <span className="status-green">
        Available
      </span>
    ) : (
      <span className="status-red">
        Booked
      </span>
    )}
    </div>
  </div>

  {/* Accordion Style Description */}

  <details className="about-box" open>
    <summary>
      About Venue
    </summary>

    <p>
      {venue.description}
    </p>

  </details>

  {/* Feature Cards */}

  <div className="feature-grid">

    <div className="feature-card">
      🌸 Premium Decoration
    </div>

    <div className="feature-card">
      ⛵ Exclusive Boat Arrival
    </div>

    <div className="feature-card">
      🍽️ Catering Available
    </div>

    <div className="feature-card">
      💆 Ayurvedic Couple Spa
    </div>

    <div className="feature-card">
      📸 Photo Friendly
    </div>

    <div className="feature-card">
      🍲 Local Cuisine Tasting
    </div>

  </div>

  <Link
    to="/reserve"
    state={{
      venueId: venue.id,
      venueName: venue.name,
      venuePrice: venue.price
    }}
  >
    <button className="reserve-btn">
      Reserve Venue
    </button>
  </Link>

</div>

  </div>

</div>
  );

};

export default Morevenueside;