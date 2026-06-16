import React from "react";
import sparkle from "../../assets/Images/sparkle.png";
import verify from "../../assets/Images/verify.png";
import hand from "../../assets/Images/handremove.png";
import "../../assets/Style/Whychoose.css";

const cardsData = [
  {
    id: 1,
    title: "Verified Indian Families",
    text: "Celebrations with depth, elegance, and a touch of grandeur.",
    img: sparkle,
  },

  {
    id: 2,
    title: "Secure Online Payment",
    text: "Safe, transparent, and trusted payments for peace of mind.",
    img: verify,
  },

  {
    id: 3,
    title: "Custom Packages",
    text: "Tailored experiences that reflect your unique journey.",
    img: hand,
  },
];

const Whychoose = () => {
  return (
    <div className="container py-5 cardscar">

      <div className="row justify-content-center g-4 py-4">

        {cardsData.map(({ id, title, text, img }) => (

          <div
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            key={id}
          >

            <div className="card cards-services border-0 text-center">

              <div className="icon-wrapper mb-3">
                <img
                  src={img}
                  alt={title}
                  className="service-icon"
                />
              </div>

              <div className="card-body">
                <h5 className="card-head">{title}</h5>
                <div className="card-para">{text}</div>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Whychoose;