import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/Style/Recently.css";

const Recentwed = () => {
  const navigate = useNavigate();

  // Date filter
  const [selectedDate, setSelectedDate] = useState("");

  // Weddings state
  const [allWeddings, setAllWeddings] = useState([]);

  // Fetch all weddings from backend
  useEffect(() => {
    const fetchWeddings = async () => {
      try {
        const response = await axios.get(
          "https://wedding-book.onrender.com/api/weddings/"
        );

        console.log("Fetched Weddings:", response.data);

        setAllWeddings(response.data);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    fetchWeddings();
  }, []);

  // Filter by date
  const filteredWeddings = allWeddings.filter((wedding) => {
    if (!selectedDate) return true;

    // backend field = wedding_date
    return wedding.wedding_date === selectedDate;
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
            onChange={(e) =>
              setSelectedDate(e.target.value)
            }
            className="form-control w-25 mx-auto"
          />

          <button
            className="btn btn-dark mt-3"
            onClick={() => setSelectedDate("")}
          >
            Clear Filter
          </button>

        </div>

        {/* Wedding Cards */}

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

     <div>
  <img
    src="https://via.placeholder.com/400x500"
    alt="test"
    style={{
      width: "300px",
      height: "300px"
    }}
  />
</div>

                  <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white">

                    <h5 className="card-title">
                      {wedding.firstname} &{" "}
                      {wedding.partner_firstname}
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