import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import wed7 from "../../assets/Images/banimgjpj.jpeg";
import VenueMap from "./VenueMap";
import "../../assets/Style/Venuedata.css";

function VenueNearby() {
  const navigate = useNavigate();
  const API_URL = "https://wedding-book.onrender.com";

  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mapVenues, setMapVenues] = useState([]);
const [userLocation, setUserLocation] = useState(null);

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
  const showNearestVenues = async () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setUserLocation({
        lat: lat,
        lng: lng
      });

      const response = await fetch(
        `${API_URL}/api/venue-map/`
      );

      const data = await response.json();

      setMapVenues(data);
    },

    () => {
      alert("Location permission denied");
    }
  );
};

return (
  <section className="venues-section">

    {/* New Banner First */}
    <div className="banner-wrapper">
      <div className="banner-box">
        <img src={wed7} alt="decor" className="decore-img" />

        <div className="banner-overlay"></div>

        <div className="banner-content">
          <h2>VENUE</h2></div>
      </div>
    </div>

    {/* Rest of your existing content */}
    <div className="container">

      <h2 className="venue-main-title">
        Find Your Wedding Venue
      </h2>

      <p className="venue-description">
        Discover beautiful wedding venues tailored to your style and celebration.
      </p>

      {loading ? (
        <p className="loading-text">Loading venues...</p>
      ) : venues.length === 0 ? (
        <p className="loading-text">No venues found.</p>
      ) : (

        <div className="venue-grid">
          {venues.map((venue) => (
            <div className="venue-card" key={venue.id}>

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
                <h4 className="venue-title">{venue.name}</h4>

                <p className="venue-location">
                  📍 {venue.location}
                </p>

                <div className="couple-name">
                  💍 {venue.bride_name} & {venue.groom_name}
                </div>

                <div className="venue-price">
                  ₹ {venue.price}
                </div>

                <div
                  className={
                    venue.status === "Available"
                      ? "status available"
                      : "status booked"
                  }
                >
                  {venue.status}
                </div>

                <Link to={`/morevenue/${venue.id}`}>
                  <button className="view-btn">
                    View Venue
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      )}
    </div>
  </section>
);
}

export default VenueNearby;