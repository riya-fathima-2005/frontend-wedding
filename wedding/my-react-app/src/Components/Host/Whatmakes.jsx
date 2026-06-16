import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/Style/Whatmakes.css";
import host from "../../assets/Images/host1.jpg";
import host2 from "../../assets/Images/host2.jpg";
import host3 from "../../assets/Images/host3.jpg";

const testimonials = [
  {
    title: "Build connections with international travelers",
    text: "Hosting international travelers through JoinMyWedding gave us a beautiful chance to connect with people from different cultures.",
    name: "Namrata Nataraj & Nith Bathi",
    place: "Bangalore · August 2016",
    img: host,
  },
  {
    title: "Share and celebrate your culture",
    text: "Explaining our wedding traditions to someone new made the experience even more joyful for everyone.",
    name: "Urvi Ambavat & Paras Shah",
    place: "Mumbai · December 2016",
    img: host2,
  },

  {
    title: "Get support toward wedding expenses",
    text: "Their presence added joy to our wedding, and their contributions genuinely helped us along the way.",
    name: "Biswajit Debdas & Chandrama ",
    place: "Burdwan · December 2016",
    img: host3,
  },

];

const Whatmakes = () => {
  return (
    <div className="client-section py-5">
      <div className="container justify-content-center">
        <div className="text-center mb-5">
          <h2 className="client-title">
            What makes hosting travelers so special for our couples
          </h2>
        </div>

        <div className="row g-4 justify-content-center mb-4">
          {testimonials.map((item, index) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={index}
            >
              <div className="client-card text-center p-4">

                <img
                  src={item.img}
                  alt={item.name}
                  className="client-img rounded-circle mx-auto" />
                <h5 className="mt-3 client-name">{item.name}</h5>
                <p className="client-location">{item.place}</p>
                <p className="client-wedding">{item.title}</p>
                <p className="client-review">{item.text}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whatmakes;
