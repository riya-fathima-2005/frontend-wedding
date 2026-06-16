import React from 'react'
import stock from "../../assets/Images/istockphoto.jpg"

const Costumebanner = () => {
  return (
     <div className="container abouts-section">
    
                <div className="row">
                    <div className="col-12">
                        <div className="img-container">
                            <img src={stock} alt="decor" className="decore-img" />
                            <h2 className="overlay-text text-white">Costumes</h2>
                        </div>
                    </div>
                </div>
            </div>
            
  )
}

export default Costumebanner
