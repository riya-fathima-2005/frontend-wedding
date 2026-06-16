import React from 'react'
import "../../assets/Style/Accommodation.css"

const Accommodation = () => {
    return (

        <section className="accommodation py-5 bg-light">
            <div className="container text-center">
                <h2 className=" mb-4 comfort">Comfortable Stay & Accommodation</h2>
                <p className=" mb-5 acco">
                    We ensure every guest enjoys a safe, clean, and premium stay with
                    modern facilities and warm Indian hospitality.
                </p>

                <div className='row g-4'>
                    
                    <div className="col-md-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front d-flex align-items-center justify-content-center">
                                    <div className="feature-icon mb-3 text-white">🛏</div>
                                    <h5 className='text-white'> Luxurious Rooms</h5>
                                </div>
                                <div className="flip-card-back d-flex align-items-center justify-content-center">
                                    <p className='clean'>Clean and cozy stay with full comfort.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front d-flex align-items-center justify-content-center">
                                    <div className="feature-icon mb-3 text-white">🛎</div>
                                    <h5 className='text-white'> 24/7 Support</h5>
                                </div>
                                <div className="flip-card-back d-flex align-items-center justify-content-center">
                                    <p className='clean'>Always there to assist anytime.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front d-flex align-items-center justify-content-center">
                                    <div className="feature-icon mb-3">🚐</div>
                                    <h5 className='text-white'> Transport Help</h5>
                                </div>
                                <div className="flip-card-back d-flex align-items-center justify-content-center">
                                    <p className='clean'>Airport pickup & travel assistance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >

    )
}

export default Accommodation
