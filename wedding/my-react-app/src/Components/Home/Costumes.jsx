import React from 'react'
import saree from "../../assets/Images/sarees.jpg"
import lehanga from "../../assets/Images/lehanga.jpg"
import shervani from "../../assets/Images/shervanis.jpg"
import kurtas from "../../assets/Images/kurtas.jpg"
import south from "../../assets/Images/south.jpg"
import jewellery from "../../assets/Images/jwellery.jpg"
import "../../assets/Style/Costumes.css"
import { Link } from 'react-router-dom'


const cardData = [
    { id: 1, title: "Sarees", text: "Discover stunning venues tailored to your vision and style.", img: saree },
    { id: 2, title: "Lehangas", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: lehanga },
    { id: 3, title: "Sherwanis", text: "Transform spaces into magical, breathtaking settings.", img: shervani },
    { id: 4, title: "Kurtas", text: "Discover stunning venues tailored to your vision and style.", img: kurtas },
    { id: 5, title: "Veshti & Sattai", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: south },
    { id: 6, title: "Jewellery Sets", text: "Crafting unforgettable celebrations across the globe, wherever your love takes you.", img: jewellery },
];

const Costumes = () => {
    return (
        <div className="costume-section py-4 mt-5">
            <div className='container '>
                <h2 className='text-center text-white mt-4 costumes'>Costumes & Dressing support</h2>
                <p className='text-center text-white costume-para mb-5 '>Step into the beauty of Indian culture with our stunning traditional outfits. Choose <br />
                    from colorful sarees, elegant lehengas, royal sherwanis, and more. Our team will help you <br />
                    select the perfect look for every ceremony — from Haldi to Reception.</p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
                    {cardData.map((card, id) => (
                        <div className="col d-flex justify-content-center" key={id}>
                            <div className="card text-center border-0 card-service">
                                <img src={card.img} alt="chat" className="card-img" />
                                <div className="card-body border rounded">
                                    <h5 className="card-title text-center text-white ">{card.title}</h5>
                                    <p className="card-text text-white">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-end mt-4 button mb-5">
                    
                    <Link to="/booknow">              
                      <button type="button" className="btn px-4">Book Now</button>
                    </Link>

                </div>


            </div>
        </div>
    )
}

export default Costumes
