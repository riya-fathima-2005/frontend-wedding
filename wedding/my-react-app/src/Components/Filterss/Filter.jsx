import React, { useState } from "react";
import "../../assets/Style/Filterss.css";
import bannerImg from "../../assets/Images/ban3.png";

const Filter = () => {

  const [startDate, setStartDate] = useState("2025-12-26");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("Kerala");
  const [city, setCity] = useState("Kochi");

  // SEARCH

  const handleSearch = () => {

    const filters = {
      startDate,
      location,
      state,
      city,
    };

    console.log("Applied Filters:", filters);

  };

  return (

    <div
      className="hero-banner"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.45)
          ),
          url(${bannerImg})
        `,
      }}
    >

      {/* OVERLAY */}

      <div className="banner-overlay"></div>

      <div className="container">

        {/* CONTENT */}

        <div className="banner-content text-center">


          <h1 style={{fontSize:"60px", marginLeft:"100px", marginTop:"30px"}}>
            Find Your  Wedding
          </h1> 

        </div>

        {/* HORIZONTAL FILTER */}

        <div className="horizontal-filter">

          {/* DATE */}

          <div className="filter-group">

            <label>
              Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="filter-input"
            />

          </div>

          {/* LOCATION */}

          <div className="filter-group">

            <label>
              Location
            </label>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="filter-input"
            >

              <option value="">
                Any Location
              </option>

              <option value="India">
                India
              </option>

            </select>

          </div>

          {/* STATE */}

          <div className="filter-group">

            <label>
              State
            </label>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="filter-input"
            >

              <option>
                Kerala
              </option>

              <option>
                Tamil Nadu
              </option>

              <option>
                Maharashtra
              </option>

            </select>

          </div>

          {/* CITY */}

          <div className="filter-group">

            <label>
              City
            </label>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="filter-input"
            >

              <option>
                Kochi
              </option>

              <option>
                Chennai
              </option>

              <option>
                Mumbai
              </option>

            </select>

          </div>

          {/* BUTTON */}

          <button
            className="search-button"
            onClick={handleSearch}
          >

            Search

          </button>

        </div>

      </div>

    </div>

  );
};

export default Filter;