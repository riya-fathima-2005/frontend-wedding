import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Style/Recently.css";

const Recentwed = () => {
  const navigate = useNavigate();

  // Date filter state
  const [selectedDate, setSelectedDate] = useState("");

  // Get weddings from localStorage
  const allWeddings =
    JSON.parse(localStorage.getItem("allWeddings")) || [];

  // Filter weddings by date
  const filteredWeddings = allWeddings.filter((wedding) => {
    if (!selectedDate) return true;

    return wedding.weddingDate === selectedDate;
  });

  return (
    <div>
      <div className="container mb-5">
        <h2 className="text-center recent mt-5">
          Choose a celebration, Live the culture
        </h2>

        <p className="text-center mb-5 recent-para">
          We don't just plan events, we create experiences that live forever.
          <br />
          Your wedding or celebration is a chapter in your love story,
          and we ensure every detail reflects you.
        </p>

        {/* Date Filter */}
        <div className="text-center mb-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="form-control w-25 mx-auto"
          />

          <button
            className="btn btn-dark mt-3"
            onClick={() => setSelectedDate("")}
          >
            Clear Filter
          </button>
        </div>

        {/* User Weddings */}
        {filteredWeddings.length > 0 ? (
          <div className="row justify-content-center">
            {filteredWeddings.map((wedding, index) => (
              <div
                className="col-md-4 d-flex justify-content-center mb-4"
                key={index}
              >
                <div
                  className="card card-overlay text-center border-0 card-service no-focus-border"
                  onClick={() =>
                    navigate("/wedding-details", {
                      state: wedding,
                    })
                  }
                >
                  <img
                    src={wedding.profileImage}
                    alt="Wedding"
                    className="card-img"
                  />

                  <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white">
                    <h5 className="card-title">
                      {wedding.firstname} &{" "}
                      {wedding.partnerFirstname}
                    </h5>

                    <p className="card-text">
                      Wedding Profile
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h5 className="text-center mt-4">
            No weddings found for selected date
          </h5>
        )}
      </div>
    </div>
  );
};

export default Recentwed;