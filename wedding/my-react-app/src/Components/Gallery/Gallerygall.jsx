import React from 'react'
import decor from "../../assets/Images/decor.jpg"
import wed1 from "../../assets/Images/wed1.jpg"
import wed2 from "../../assets/Images/wed2.jpg"
import wed3 from "../../assets/Images/wed3.jpg"
import "../../assets/Style/Gallerygall.css"


const Gallerygall = () => {
    return (
        <div>
            <div className='container py-4'>
                <h2 className='text-center mt-5 ourgallery'>Our Gallery</h2>

                <p className='text-center mb-5 oursub'>
                    Step inside our world of elegance and artistry. Explore real weddings and <br />
                    events curated by HoD, where every picture tells a story of love,
                    beauty, and timeless celebration.
                </p>
                <div className="row g-3">
                    <div className="col-md-8 decor">
                        <img src={decor} alt="decor" className="img-fluid w-100" />
                    </div>
                    

                    <div className="col-md-4 wed1">
                        <img src={wed1} alt="wed1" className="img-fluid w-100" />
                    </div>
                </div>

                <div className="row g-3 mt-3">
                    <div className="col-md-4 wed2">
                        <img src={wed2} alt="wed2" className="img-fluid w-100" />
                    </div>

                    <div className="col-md-8 wed3">
                        <img src={wed3} alt="wed3" className="img-fluid w-100" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Gallerygall
