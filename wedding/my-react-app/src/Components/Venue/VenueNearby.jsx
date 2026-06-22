import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mapimg from "../../assets/Images/map.png";


import "../../assets/Style/Venuedata.css";
import wed7 from "../../assets/Images/ban4.png";

function VenueNearby() {
  const navigate = useNavigate();
  const API_URL = "https://wedding-book.onrender.com";

  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `${API_URL}/api/venues/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setVenues(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, [navigate]);

  return (
    <section className="venues-section">

      <div className="container">

        <h2 className="venue-main-title">
          Find Nearby Wedding Venues
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : (

          <div className="venue-layout">

            {/* LEFT SIDE */}
            <div className="venue-left">

              <div className="venue-grid-two">

                {venues.map((venue) => (
                  <div
                    className="venue-card"
                    key={venue.id}
                  >
                    <div className="venue-image-wrapper">
                      <img
                        src={
                          venue.image
                            ? venue.image.startsWith("http")
                              ? venue.image
                              : `${API_URL}${venue.image}`
                            : wed7
                        }
                        alt={venue.name}
                        className="venue-image"
                      />
                    </div>

                    <div className="venue-content">

                      <h4 className="venue-title">
                        {venue.name}
                      </h4>

                      <p className="venue-location">
                        📍 {venue.location}
                      </p>

                      <div className="venue-price">
                        ₹ {venue.price}
                      </div>

                      <Link
                        to={`/morevenue/${venue.id}`}
                      >
                        <button className="view-btn">
                          View Venue
                        </button>
                      </Link>

                    </div>
                  </div>
                ))}

              </div>

            </div>


            {/* RIGHT SIDE */}
           <div className="venue-right">

  <button className="near-btn bg-dark">
    View Nearest Venues
  </button>

  <div className="map-box">
    <img style={{height:"1200px"}}
      src={mapimg}
      alt="Map"
      className="dummy-map"
    />
  </div>

</div>

          </div>
        )}

      </div>
    </section>
  );
}

export default VenueNearby;