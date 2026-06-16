import React from 'react'
import bangles from "../../assets/Images/Bangles.jpg"
import necklace from "../../assets/Images/necklace.jpg"
import earrings from "../../assets/Images/earrings.jpg"
import { Link } from 'react-router-dom';

const cardData = [
    { id: 1, title: "Bangles", text: "Discover stunning venues tailored to your vision and style.", img: bangles},
    { id: 2, title: "Necklaces", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: necklace },
    { id: 3, title: "Earrings", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: earrings },
];
const Accessories = () => {
    return (
        <div className="wedding-section  mt-5">
            <div className='container  '>
                <h2 className='text-center  mt-5 wedding'>Accessories</h2>
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

export default Accessories
