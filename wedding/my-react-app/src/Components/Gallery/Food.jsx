import React from 'react'
import indian from "../../assets/Images/indiandish.jpg"
import buffet from "../../assets/Images/buffet.jpg"
import welcome from "../../assets/Images/welcome-drink.jpg"

const cardData = [
    { id: 1, title: "Traditional Indian dishes ", img: indian },
    { id: 2, title: "Buffet arrangement", img: buffet },
    { id: 3, title: "Welcome drinks", img: welcome },
];
const Food = () => {
    return (
        <div>
            <div className='container py-4'>
                <h2 className='text-center recent mt-5'> Food & Hospitality</h2>
                <p className='text-center mb-5 recent-para'>
                    Savor the true flavors of India with traditional dishes and warm hospitality. <br />
                    From royal feasts to sweet delights, every meal is a celebration — served with love and culture.
                </p>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
                    {cardData.map((card) => (
                        <div className="col d-flex justify-content-center" key={card.id}>
                            <div className="card card-overlay text-center border-0 card-service">
                                <img src={card.img} alt={card.title} className="card-img" />
                                <div className="card-img-overlay d-flex flex-column justify-content-end text-center text-white">
                                    <h5 className="card-title text-center">{card.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            


        </div>

    )
}

export default Food
