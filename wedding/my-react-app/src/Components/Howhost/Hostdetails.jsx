  import React, { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import "../../assets/Style/Hostdetails.css";
  import wed7 from "../../assets/Images/ban4.png";

  const API_URL = "https://wedding-book.onrender.com"

  const Hostdetails = () => {
    const navigate = useNavigate();

    const [weddingDate, setWeddingDate] = useState("");
    const [weddingTime, setWeddingTime] = useState("");
    const [venue, setVenue] = useState("");
    const [customVenue, setCustomVenue] = useState("");
    const [customVenuePrice, setCustomVenuePrice] = useState("");
    const [foodType, setFoodType] = useState("");
    const [alcoholServed, setAlcoholServed] = useState("");
    const [language, setLanguage] = useState("");
    const [dressCode, setDressCode] = useState("");
    const [description, setDescription] = useState("");
    const [managerPhone, setManagerPhone] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
  
    const [venues, setVenues] = useState([]);

    const foodOptions = ["Vegetarian", "Non-Vegetarian", "Both"];

    const alcoholOptions = ["Yes", "No"];

    const languages = ["English", "Malayalam", "Hindi", "Tamil"];

    const dressCodes = [
      "Traditional Kerala",
      "Traditional Indian",
      "Formal",
      "Semi Formal",
      "Casual",
    ];

  
    const [loading, setLoading] = useState(true);

  // fetch venues
  useEffect(() => {
    console.log("Fetching venues...");

    const fetchVenues = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${API_URL}/api/venues/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        console.log("Venue Data:", data);

        setVenues(
          Array.isArray(data)
            ? data.filter(
                (venue) => venue.status === "Available"
              )
            : []
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);


  // live location
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        alert("Location access denied");
      }
    );
  };


  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !weddingDate ||
      !weddingTime ||
      !venue ||
      !foodType ||
      !alcoholServed ||
      !language ||
      !dressCode ||
      !description ||
      !managerPhone
    ) {
      alert("Please fill all required fields");
      return;
    }

    const selectedVenue =
    venue === "other"
      ? null
      : venues.find(
          (item) =>
            item.id === Number(venue)
        );

  if (
    venue === "other" &&
    !customVenue.trim()
  ) {
    alert("Please enter venue name");
    return;
  }

  if (
    venue === "other" &&
    (!customVenue.trim() || !customVenuePrice)
  ) {
    alert("Please enter venue name and venue price");
    return;
  }



  const weddingData = {
    venueId: selectedVenue?.id || null,

    venueName:
      venue === "other"
        ? customVenue
        : selectedVenue?.name,

    venuePrice:
    venue === "other"
      ? Number(customVenuePrice)
      : selectedVenue?.price,

    weddingDate,
    weddingTime,
    foodType,
    alcoholServed,
    language,
    dressCode,
    description,
    managerPhone,
  latitude,
  longitude,
  };
  const step1Data = JSON.parse(
    sessionStorage.getItem("hostStep1")
  );

  const finalWedding = {
    ...step1Data,
    ...weddingData,
  };

  sessionStorage.setItem(
    "finalWedding",
    JSON.stringify(finalWedding)
  );

  console.log(
    "Final Wedding Data:",
    finalWedding
  );

  navigate("/payment");

    };


    return (
      <div>
        <div className="imagesec">
                <img src={wed7} alt="decor" className="decore-img" />
        
                <div className="banner-overlay"></div>
        
                <h2 className="overlay-text">
                  WEDDING DETAILS
                </h2>
              </div>

      
      <div className="host-details-container">
        <div className="host-details-card">
          <h2 className="host-title">Wedding Details</h2>

          <form onSubmit={handleSubmit}>
            {/* Date & Time */}

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Wedding Date *</label>

                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="form-control"
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Wedding Time *</label>

                <input
                  type="time"
                  className="form-control"
                  value={weddingTime}
                  onChange={(e) => setWeddingTime(e.target.value)}
                />
              </div>
            </div>

            {/* Venue */}

            <div className="mb-3">
              <label>Wedding Venue *</label>

            <select
    className="form-select"
    value={venue}
    onChange={(e) => setVenue(e.target.value)}
  >
    <option value="">
      {loading ? "Loading Venues..." : "Select Venue"}
    </option>

    {venues.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))}

    <option value="other">
      Other Venue
    </option>
  </select>



      {venue === "other" && (
    <>
      <div className="mt-3">
        <label>Custom Venue Name *</label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter your venue name"
          value={customVenue}
          onChange={(e) =>
            setCustomVenue(e.target.value)
          }
        />
      </div>

      <div className="mt-3">
        <label>Venue Price *</label>

        <input
          type="number"
          className="form-control"
          placeholder="Enter venue price"
          value={customVenuePrice}
          onChange={(e) =>
            setCustomVenuePrice(e.target.value)
          }
        />
      </div>
    </>
  )}
    </div>


            {/* Food Type */}

            <div className="mb-4">
              <label className="d-block mb-3">Food Type *</label>

              <div className="radio-group">
                {foodOptions.map((food) => (
                  <label key={food} className="custom-radio">
                    <input
                      type="radio"
                      name="food"
                      value={food}
                      checked={foodType === food}
                      onChange={(e) => setFoodType(e.target.value)}
                    />

                    <span style={{ backgroundColor: foodType === food ? "#000" : "#fff", color: foodType === food ? "#fff" : "#000" }}>
                      {food}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Alcohol */}

            <div className="mb-4">
              <label className="d-block mb-3">Alcohol Served?</label>

              <div className="radio-group">
                {alcoholOptions.map((item) => (
                  <label key={item} className="custom-radio">
                    <input
                      type="radio"
                      name="alcohol"
                      value={item}
                      checked={alcoholServed === item}
                      onChange={(e) => setAlcoholServed(e.target.value)}
                    />

                    <span style={{ backgroundColor: alcoholServed === item ? "#000" : "#fff", color: alcoholServed === item ? "#fff" : "#000" }}>
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Language */}

            <div className="mb-3">
              <label>Main Language *</label>

              <select
                className="form-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">Select Language</option>

                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Dress Code */}

            <div className="mb-3">
              <label>Dress Code *</label>

              <select
                className="form-select"
                value={dressCode}
                onChange={(e) => setDressCode(e.target.value)}
              >
                <option value="">Select Dress Code</option>

                {dressCodes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}

            <div className="mb-4 txt-black">
              <label>Wedding Description *</label>

            <textarea
    rows="5"
    maxLength="300"
    className="color form-control"
    placeholder="Tell guests about your wedding..."
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
                  <div className="description-count">
    {description.length}/300
  </div>
  </div>

  <div className="mb-3">
    <label>Manager Phone Number *</label>
    <input
      type="text"
      className="form-control"
      value={managerPhone}
      onChange={(e) => setManagerPhone(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <button
      type="button"
      className="btn btn-dark"
      onClick={getLocation}
    >
      Get Live Location
    </button>
  </div>
  {latitude && longitude && (
    <div className="mt-3">
      <iframe
        width="100%"
        height="250"
        style={{ borderRadius: "10px" }}
        src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
        title="Google Map"
      ></iframe>

      <p className="mt-2">
        Location Saved: {latitude}, {longitude}
      </p>
    </div>
  )}    


            {venue && (
    <div className="preview-card">
      <h5>Wedding Summary</h5>

  <p>
    Venue:{" "}
    {venue === "other"
      ? customVenue
      : venues.find(
          (v) =>
            v.id === Number(venue)
        )?.name}
  </p>

      <p>
        Food Type: {foodType || "-"}
      </p>

      <p>
        Language: {language || "-"}
      </p>

      <p>
        Dress Code: {dressCode || "-"}
      </p>
    </div>
  )}


            {/* Buttons */}

            <div className="button-group">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => navigate(-1)}
              >
                Back
              </button>

              <button type="submit" className="btn btn-dark">
                Continue to Payment
              </button>
            </div>
                </form>
        </div>
      </div>

        </div>
    );
  };


  export default Hostdetails;
