import React from 'react'
import sarees from "../../assets/Images/sarees.jpg"
import lehengas from "../../assets/Images/lehanga.jpg"
import anarkali from "../../assets/Images/anarkali.jpg"
import { Link } from 'react-router-dom';

const cardData = [
    { id: 1, title: "Sarees", text: "Discover stunning venues tailored to your vision and style.", img: sarees },
    { id: 2, title: "Lehengas", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: lehengas },
    { id: 3, title: "Anarkali Gown", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: anarkali },
];

const Womens = () => {
    return (
        <div className="wedding-section  mt-5">
            <div className='container  '>
                <h2 className='text-center  mt-5 wedding'>Women’s Wear</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
                    {cardData.map((card, id) => (
                        <div className="col d-flex justify-content-center" key={id}>
                            <div className="card text-center border-0 card-servicess mt-5">
                                <img src={card.img} alt="/" className="card-img" />
                                <div className="card-body border rounded">
                                    <h5 className="card-head text-center  ">{card.title}</h5>
                                    <p className="card-text">{card.text}</p>

                                    <div className="d-flex justify-content-center but">
                                        <Link to="/booknow" className="btn book-btn px-4 text-white">
                                            Book Now
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Womens
