import React, { useState, useEffect } from "react";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import "../../assets/Style/Reserve.css";

function Reserve() {
const location = useLocation();

const bookingData =location.state;

  const navigate = useNavigate();

  // API URL
  const API_URL = "https://wedding-book.onrender.com"

  // STATES
  const [venues, setVenues] = useState([]);

const [formData, setFormData] = useState({

  customer_name: "",

  customer_email: "",

  customer_phone: "",

  booking_date: "",

  guests: "",

  venue:
    bookingData?.venueId || "",

  total_amount:
    bookingData?.venuePrice || "",

  status: "Pending",
});

  // FETCH VENUES
  useEffect(() => {

    const fetchVenues = async () => {

      try {

        // GET TOKEN
        const token =
          localStorage.getItem("token");

        // IF TOKEN MISSING
        if (!token) {

          navigate("/login");

          return;
        }

        // FETCH VENUES API---
        const response = await fetch(

          `${API_URL}/api/venues/`,

          {
            headers: {

              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        // TOKEN INVALID
        if (response.status === 401) {

          localStorage.clear();

          navigate("/login");

          return;
        }

        // RESPONSE DATA
        const data =
          await response.json();

        console.log(data);

        // SAFE ARRAY CHECK
        setVenues(

          Array.isArray(data)
            ? data
            : []

        );

      } catch (error) {

        console.log(error);

      }

    };

    fetchVenues();

  }, [navigate]);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });

  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // GET TOKEN
      const token =
        localStorage.getItem("token");

      // NO TOKEN
      if (!token) {

        navigate("/login");

        return;
      }

      console.log(formData);

      // API CALL
      const response = await fetch(

        `${API_URL}/api/bookings/`,

        {
          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({

            customer_name:
              formData.customer_name,

            customer_email:
              formData.customer_email,

            customer_phone:
              formData.customer_phone,

            booking_date:
              formData.booking_date,

            guests:
              Number(formData.guests),

            venue:
              Number(formData.venue),

            total_amount:
              Number(formData.total_amount),

            status:
              formData.status,
          }),
        }
      );

      // RESPONSE DATA
      const data =
        await response.json();

      console.log(data);

      // SUCCESS
      if (response.ok) {

        alert(
          "Reservation Added Successfully ✅"
        );

        // CLEAR FORM
        setFormData({

          customer_name: "",

          customer_email: "",

          customer_phone: "",

          booking_date: "",

          guests: "",

          venue: "",

          total_amount: "",

          status: "Pending",
        });

      } else {

        alert(
          "Booking Failed ❌"
        );

        console.log(data);

      }

    } catch (error) {

      console.log(error);

      alert(
        "Something Went Wrong ❌"
      );

    }

  };

  return (

    <section className="reserve-page">

      <div className="container">

        <div className="reserve-wrapper">

          {/* LEFT SIDE */}
          <div className="reserve-left">

            <h1 className="reserve-title">

              Reserve Your Dream Venue

            </h1>

            <p className="reserve-subtitle">

              Begin your unforgettable
              wedding journey with elegance,
              luxury, and timeless celebration
              experiences crafted specially
              for you and your loved ones.

            </p>

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
              alt="Wedding"
              className="reserve-image"
            />

          </div>

          {/* RIGHT SIDE */}
          <div className="reserve-form-box">

            <h2 className="form-title">

              Reservation Form

            </h2>

            <form
              className="reserve-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <input
                type="text"
                name="customer_name"
                placeholder="Full Name"
                value={formData.customer_name}
                onChange={handleChange}
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="customer_email"
                placeholder="Email Address"
                value={formData.customer_email}
                onChange={handleChange}
                required
              />

              {/* PHONE */}
              <input
                type="tel"
                name="customer_phone"
                placeholder="Phone Number"
                value={formData.customer_phone}
                onChange={handleChange}
                required
              />

              {/* DATE */}
              <input
                type="date"
                name="booking_date"
                value={formData.booking_date}
                onChange={handleChange}
                required
              />

              {/* GUESTS */}
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />

              {/* VENUE SELECT */}
           <input
  type="text"
  value={
    bookingData?.venueName || ""
  }
  readOnly
/>

              {/* AMOUNT */}
             <input
  type="number"
  name="total_amount"
  value={formData.total_amount}
  readOnly
/>

              {/* BUTTON */}
              <button type="submit">

                Confirm Reservation

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Reserve;