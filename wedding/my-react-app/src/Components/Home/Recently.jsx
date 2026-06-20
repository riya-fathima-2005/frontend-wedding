import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/Style/Recently.css";

const Recentwed = () => {
  const navigate = useNavigate();

  const [allWeddings, setAllWeddings] = useState([]);

  useEffect(() => {
    const fetchWeddings = async () => {
      try {
        const response = await axios.get(
          "https://wedding-book.onrender.com/api/weddings/"
        );

        console.log("Wedding Data:", response.data);

        setAllWeddings(response.data);
      } catch (error) {
        console.log("Error fetching weddings:", error);
      }
    };

    fetchWeddings();
  }, []);

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

        {/* Weddings */}

        {allWeddings.length > 0 && (
          <div className="row justify-content-center">

            {allWeddings.slice(0, 3).map((wedding, index) => (
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
                    src={wedding.profile_image}
                    alt="Wedding"
                    className="card-img"
                  />

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
        )}

        {allWeddings.length === 0 && (
          <p className="text-center">
            No weddings available
          </p>
        )}

      </div>
    </div>
  );
};

export default Recentwed;