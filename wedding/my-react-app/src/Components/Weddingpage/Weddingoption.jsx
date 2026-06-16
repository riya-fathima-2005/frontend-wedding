import React from "react";
import { Link, useNavigate } from "react-router-dom";

import south from "../../assets/Images/southind.jpg";
import royal from "../../assets/Images/royalrajasthani.jpg";
import punjabi from "../../assets/Images/punjabi.jpg";
import bkerala from "../../assets/Images/beachwedkerala.jpg";
import bgoa from "../../assets/Images/beachgoa.jpg";
import temple from "../../assets/Images/temple.jpg";

import "../../assets/Style/Weddingbook.css";

const cardData = [
  {
    id: 1,
    title: "Traditional South Indian Wedding",
    text: "From $299 per person",
    img: south,
  },
  {
    id: 2,
    title: "Royal Rajasthani",
    text: "From $299 per person",
    img: royal,
  },
  {
    id: 3,
    title: "Punjabi Wedding With Baraat Dancing",
    text: "From $299 per person",
    img: punjabi,
  },
  {
    id: 4,
    title: "Beach Wedding in Kerala",
    text: "From $299 per person",
    img: bkerala,
  },
  {
    id: 5,
    title: "Beach Wedding in Goa",
    text: "From $299 per person",
    img: bgoa,
  },
  {
    id: 6,
    title: "Temple Wedding Experience",
    text: "From $299 per person",
    img: temple,
  },
];

const Weddingoption = () => {
  const navigate = useNavigate();

  const allWeddings =
    JSON.parse(localStorage.getItem("allWeddings")) || [];

  return (
    <div className="wedding-section mt-5 mb-5">
      <div className="container">

        <h2 className="text-center mt-4 wedding">
          Wedding Options Section
        </h2>

        <p className="text-center wedding-para mb-5 mt-4">
          Experience the heart of India through its weddings —
          <br />
          where every ritual has a meaning, every smile carries warmth,
          and every celebration becomes a lifelong memory.
        </p>

        {/* Default Wedding Cards */}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">

          {cardData.map((card) => (
            <div
              className="col d-flex justify-content-center"
              key={card.id}
            >
              <div className="card text-center border-0 card-servicess">

                <img
                  src={card.img}
                  alt={card.title}
                  className="card-img"
                />

                <div className="card-body border rounded">

                  <h5 className="card-head text-center">
                    {card.title}
                  </h5>

                  <p className="card-textt">
                    {card.text}
                  </p>

                  <div className="d-flex justify-content-center but">
                    <Link
                      to="/booknow"
                      className="btn book-btn px-4 text-white"
                    >
                      Book Now
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* My Weddings */}

        {allWeddings.length > 0 && (
          <>
            <h2 className="text-center mt-5 mb-4 wedding">
              My Weddings
            </h2>

            <div className="row justify-content-center">

              {allWeddings.map((wedding, index) => (
                <div
                  className="col-md-4 mb-4"
                  key={index}
                >
                  <div className="card text-center border-0 card-servicess">

                    <img
                      src={wedding.profileImage}
                      alt="Wedding"
                      className="card-img"
                    />

                    <div className="card-body border rounded">

                      <h5 className="card-head">
                        {wedding.firstname} &{" "}
                        {wedding.partnerFirstname}
                      </h5>

                      <p className="card-textt">
                        Wedding Profile
                      </p>

                      <div className="d-flex justify-content-center">

                        <button
                          className="btn book-btn px-4 text-white"
                          onClick={() =>
                            navigate("/wedding-details", {
                              state: wedding,
                            })
                          }
                        >
                          View Details
                        </button>

                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Weddingoption;