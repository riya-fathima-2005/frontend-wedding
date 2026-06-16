import React, {
  useEffect,
  useState
} from "react";

import "../../assets/Style/MyBookings.css";

function MyBookings() {
const [showModal, setShowModal] = useState(false);

const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings, setBookings] =
    useState([]);

  const API_URL = "https://wedding-book.onrender.com"

  useEffect(() => {

  const fetchBookings = async () => {

    try {

      const token = localStorage.getItem("token");

      console.log("TOKEN:", token);

      const response = await fetch(
        `${API_URL}/api/my-bookings/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("STATUS:", response.status);

      const data = await response.json();

      console.log("DATA:", data);

      setBookings(data);

    } catch (error) {

      console.log(error);

    }

  };

  fetchBookings();

}, []);

const handleCancel = async () => {

  const token = localStorage.getItem("token");

  try {

    const response = await fetch(
      `${API_URL}/api/cancel-booking/${selectedBooking}/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {

     setBookings((prevBookings) =>
  prevBookings.map((booking) =>
    booking.id === selectedBooking
      ? {
          ...booking,
          status: "Cancelled",
        }
      : booking
  )
);
      setShowModal(false);

    }

  } catch (error) {

    console.log(error);

  }

};


  return (

    <div className="mybookings-container">

      <h1 className="booking-heading" style={{paddingTop: "60px"}}>
        My Bookings
      </h1>

      <div className="booking-grid">

        {bookings.map((booking) => (

          <div
            className="booking-card"
            key={booking.id}
          >

            <h4>
              {booking.venue_name}
            </h4>

            <div style={{ fontSize: "20px,  " }}>
              📅 <b>{booking.booking_date}</b> 
            </div>

            <div>
              👥 <b>{booking.guests} Guests</b> 
            </div>

            <div>
              💰 ₹<b>{booking.total_amount}</b>
            </div>

            <div className="booking-footer">

              <span
                className={`status ${booking.status.toLowerCase()}`}
              >
                {booking.status}
              </span>

              {booking.status !==
                "Cancelled" && (

               <button
  className="cancel-btn"
  onClick={() => {
    setSelectedBooking(booking.id);
    setShowModal(true);
  }}
>
  Cancel My Booking
</button>

              )}

            </div>

          </div>

        ))}

      </div>


{showModal && (

  <div className="modal-overlay">

    <div className="cancel-modal">

      <h3>
        Cancel Booking
      </h3>

      <p>
        Do you want to cancel your booking?
      </p>

      <div className="modal-buttons">

        <button
          className="no-btn"
          onClick={() => setShowModal(false)}
        >
          No
        </button>

        <button
          className="yes-btn"
          onClick={handleCancel}
        >
          Yes
        </button>

      </div>

    </div>

  </div>

)}

    </div>

  );
}

export default MyBookings;