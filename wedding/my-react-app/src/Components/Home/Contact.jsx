import React from 'react'
import elegant from "../../assets/Images/elegant.jpg"
import "../../assets/Style/Contact.css"
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='contact-section mt-3'>
            <img src={elegant} alt="elegant" className='full-cover' />
            <div className="container overlay-content">
                <h2 className='mt-5 conntact-us text-white'>Contact Us</h2>
                <p className='mt-4'>Your dream celebration begins here. Let’s bring your vision to life.
                    We’re excited to help you <br />experience a real Indian wedding!
                    Whether you’re planning to travel alone, as a couple, or with <br /> friends —
                    our team will guide you every step of the way.</p>
                <div className="d-flex justify-content-end buttons">
                    <Link to="">
                            <button type="button" className="btn px-4">Book Consultation</button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
