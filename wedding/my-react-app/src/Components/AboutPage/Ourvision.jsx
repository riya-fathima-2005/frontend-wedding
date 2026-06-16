import React from 'react'
import rose from "../../assets/Images/rose.jpg"

const Ourvision = () => {
    return (
        <div>
            <div>
                <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className=" container">
                                <h2 className="mb-4 ourmission">
                                    Our Vision</h2>
                                <p className="mb-4 our-para">
                                    Our vision is to become the world’s most trusted gateway to authentic Indian wedding culture where every traveler can feel the joy,
                                    love, and unity that Indian celebrations are built upon. We want to create a global space where cultural differences become reasons
                                    to come together, not stay apart.
                                </p>
                                <ul className='our-list'>
                                    <li>Strangers become family</li>
                                    <li>Cultures blend beautifully</li>
                                    <li>Memories become lifelong treasure</li>
                                    <li>Guests feel a deep emotional connection</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6 py-4">
                            <img src={rose} alt="house" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourvision
