import React from "react";
import haldi from "../../assets/Images/haldi.jpg";
import mehandi from "../../assets/Images/mehandi.jpg";
import temple from "../../assets/Images/temple.jpg";

const cardData = [
  { id: 1, title: "The Haldi Events", text: "05 Dec 2025", img: haldi },
  { id: 2, title: "The Mehandi Events", text: "01 Dec 2025", img: mehandi },
  { id: 3, title: "Temple Weddings", text: "07 Jan 2025", img: temple },
];

const Upcoming = () => {
  return (
    <div>
      <div className="container py-4">
        <h2 className="text-center recent mt-5">Upcoming Cultural Programs</h2>
        <p className="text-center mb-5 recent-para">
          Behind every unforgettable moment is a team of passionate creatives,
          designers, <br />
          and coordinators who bring vision to reality. At HoD, collaboration is
          key, we blend <br /> talent, creativity, and precision to deliver
          celebrations that feel effortless yet extraordinary.
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
          {cardData.map((card) => (
            <div className="col d-flex justify-content-center" key={card.id}>
              <div className="card card-overlay text-center border-0 card-service">
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white">
                  <h5 className="card-title text-center">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
