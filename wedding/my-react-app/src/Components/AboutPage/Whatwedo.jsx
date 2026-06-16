import React from 'react'
import wed5 from "../../assets/Images/wed5.jpg"
import "../../assets/Style/Whatwedo.css"

const Whatwedo = () => {
    return (
        <div className="whatwedo-section mt-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6 py-4">
                        <img src={wed5} alt="What We Do" className="img-fluid rounded" />
                    </div>

                    <div className="col-md-6">
                        <h2 className="mb-4 ourmission">What We Do</h2>
                        <p className="our-para">
                            We connect you with real families and authentic Indian wedding programs.
                            Our team provides complete support including:
                        </p>
                        <ul className="our-list">
                            <li>Traditional costumes & dress styling</li>
                            <li>Guidance on customs and rituals</li>
                            <li>Safe and friendly hosting</li>
                            <li>Food, music & celebration involvement</li>
                            <li>Personalized cultural packages</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Whatwedo
