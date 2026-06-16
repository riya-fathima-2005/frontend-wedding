import React from 'react'
import sherwanis from "../../assets/Images/shervanis.jpg"
import kurtas from "../../assets/Images/kurtas.jpg"
import turban from "../../assets/Images/turban.jpg"
import south from "../../assets/Images/south.jpg"
import ethnic from "../../assets/Images/ethnic.jpg"
import three from "../../assets/Images/three.jpg"
import { Link } from 'react-router-dom'


const cardData = [
    { id: 1, title: "Sherwanis", text: "Discover stunning venues tailored to your vision and style.", img: sherwanis },
    { id: 2, title: "Kurtas", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: kurtas },
    { id: 3, title: "Turban", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: turban },
    { id: 4, title: "Veshti & Sattai", text: "Discover stunning venues tailored to your vision and style.", img: south },
    { id: 5, title: "Ethnic Wear", text: "Discover stunning venues tailored to your vision and style", img: ethnic },
    { id: 6, title: "Three Piece Suit", text: "Discover stunning venues tailored to your vision and style", img: three },
];

const Mens = () => {
    return (
        <div className="wedding-section  mt-5">
            <div className='container '>
                <h2 className='text-center  mt-4 wedding'>Wedding Options Section</h2>
                <p className='text-center  wedding-para mb-5 mt-4 '>Experience the heart of India through its weddings — <br />
                    where every ritual has a meaning, every smile carries warmth, and every celebration becomes a lifelong memory.</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
                    {cardData.map((card, id) => (
                        <div className="col d-flex justify-content-center" key={id}>
                            <div className="card text-center border-0 card-servicess">
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

export default Mens
