import React from 'react'
import anna from "../../assets/Images/anna.jpg"
import david from "../../assets/Images/david.jpg"
import sofia from "../../assets/Images/sofia.jpg"
import '../../assets/Style/Clientss.css'

const clientData = [
  {
    id: 1,
    name: "Anna Marie",
    location: "France",
    weddingType: "Kerala Wedding",
    review: "“It felt like I was part of the family. Amazing culture and fun dancing.”",
    img: anna,
  },
  {
    id: 2,
    name: "David",
    location: "Canada",
    weddingType: "Punjabi Wedding",
    review:
      "“A true cultural exchange. The traditions, food, and music made the experience unforgettable.”",
    img: david,
  },
  {
    id: 3,
    name: "Sofia",
    location: "Spain",
    weddingType: "Beach Wedding Goa",
    review:"“Wearing the saree and joining the Mehendi ceremony was magical. Thank you for making it special!”",img: sofia, },
];

const Client = () => {

  return (
    <div className="client-section py-5">
      <div className="container justify-content-center">
        <div className="text-center mb-5">
          <h2 className="client-title">Guest Reviews</h2>
          <p className="client-subtitle">
            Hear from our happy guests who enjoyed being part of Indian weddings and traditions
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {clientData.map((item) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={item.id}
            >
              <div className="client-card text-center p-4 ">
                <img src={item.img} alt={item.name} className="client-img rounded-circle mx-auto" />
                <h5 className="mt-3 client-name">{item.name}</h5>
                <p className="client-location">{item.location}</p>
                <p className="client-wedding">{item.weddingType}</p>
                <p className="client-review">{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client
