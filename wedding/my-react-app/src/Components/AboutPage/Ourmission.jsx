import React from 'react'
import our from "../../assets/Images/ourmission.jpg"
import "../../assets/Style/Ourmission.css"

const Ourmission = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className=" container">
                            <h2 className="mb-4 ourmission">
                                Our Mission</h2>
                            <p className="mb-4 our-para">
                                Our mission is to create a meaningful bridge between the world and
                                the rich cultural heritage of Indian weddings. We believe that celebrations
                                are the heart of Indian culture — filled with vibrant colors, music, traditions,
                                rituals, spirituality, and the warmth of togetherness. But many international
                                travelers only get to see these moments through screens or from a distance.
                                We want to change that.
                                We are here to transform travel into a deep cultural connection —
                                welcoming global guests to step inside real Indian wedding
                                ceremonies, not as tourists, but as cherished family. From Haldi
                                to Sangeet, from royal Baraats to emotional Varmala and sacred
                                pheras, we give every visitor the opportunity to be part of authentic
                                memories, rituals, and happiness.
                            </p>
                        </div>

                    </div>
                    <div className="col-md-6 py-4">
                        <img src={our} alt="house" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourmission
