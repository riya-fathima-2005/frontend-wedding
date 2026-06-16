import React, { useState } from "react";
import "../../assets/Style/Filter.css";

const Filter = () => {
  const isLoggedIn = false; 
  const [showModal, setShowModal] = useState(false);

  const [filters, setFilters] = useState({
    weddingType: "",
    state: "",
    date: "",
    event: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    const { weddingType, state, date, event } = filters;

    if (!weddingType || !state || !date || !event) {
      alert("Please complete all filter fields");
      return;
    }

    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }

    console.log("Filters Selected:", filters);
  };

  return (
    <>

      <section className="filter-section">
        <div className="container d-flex justify-content-center">
          <div className="filter-box d-flex flex-wrap gap-3 p-3 p-md-4">

            <select name="weddingType" className="filter-item" onChange={handleChange}>
              <option value="">Wedding Type</option>
              <option>Hindu Wedding</option>
              <option>Muslim Wedding</option>
              <option>Christian Wedding</option>
            </select>

            <select name="state" className="filter-item" onChange={handleChange}>
              <option value="">State</option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </select>

            <input type="date" name="date" className="filter-item" onChange={handleChange} />

            <select name="event" className="filter-item" onChange={handleChange}>
              <option value="">Event</option>
              <option>Haldi</option>
              <option>Mehendi</option>
              <option>Reception</option>
            </select>

            <button className="search px-5" onClick={handleSearch}>
              Search
            </button>

          </div>
        </div>
      </section>

      {/* 🔐 LOGIN MODAL */}
      {showModal && (
        <div className="login-overlay">
          <div className="login-modal">

            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>

            <h4>Login Required</h4>
            <p>Sign in to explore Indian wedding experiences</p>

            <input type="text" placeholder="Enter your name" />
            <input type="tel" placeholder="Enter phone number" />

            <button className="login-btn">Continue</button>

            <small>We will send an OTP to verify your number</small>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
