import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/Style/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  // Load wedding data
  useEffect(() => {
    const data = sessionStorage.getItem("finalWedding");

    console.log("PAYMENT PAGE DATA:", data);

    if (data) {
      setBooking(JSON.parse(data));
    }
  }, []);

  const handlePayment = async () => {
    if (!booking) return;

    try {
      // Create Razorpay order
      const paymentResponse = await axios.post(
        "https://wedding-book.onrender.com/create-payment/",
        {
          amount: booking.venuePrice || 0,
        }
      );

      const order = paymentResponse.data;

      const options = {
        key: "rzp_test_SyG00JPy3MbhJq",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "Wedding Booking",
        description: booking.venueName,

        handler: async function (response) {
          try {
            // Save payment
            await axios.post(
              "https://wedding-book.onrender.com/save-payment/",
              {
                payer_name: "Customer",
                venue_name: booking.venueName,
                amount: booking.venuePrice,
                razorpay_order_id: order.id,
                razorpay_payment_id:
                  response.razorpay_payment_id,
              }
            );

            // Step 1 data
            const latestWedding = JSON.parse(
              sessionStorage.getItem("hostStep1")
            );

            console.log("STEP1 DATA:", latestWedding);

            const token = localStorage.getItem("token");

            console.log("TOKEN:", token);
            console.log("BOOKING:", booking);

            // Wedding payload
            const weddingPayload = {
              role: latestWedding.role,
              firstname: latestWedding.firstname,
              lastname: latestWedding.lastname,

              partner_firstname:
                latestWedding.partnerFirstname,

              partner_lastname:
                latestWedding.partnerLastname,

              email: latestWedding.email,
              phone: latestWedding.phonenumber,

              wedding_date: booking.weddingDate,
              wedding_time: booking.weddingTime,

              food_type: booking.foodType,
              alcohol_served:
                booking.alcoholServed,

              language: booking.language,
              dress_code: booking.dressCode,
              description: booking.description,

              custom_venue: booking.venueName,
              venue_price: booking.venuePrice,

              manager_phone:
                booking.managerPhone,

             latitude: booking.latitude
  ? parseFloat(booking.latitude)
  : null,

longitude: booking.longitude
  ? parseFloat(booking.longitude)
  : null,

              payment_status: "Success",
            };

            console.log(
              "SENDING TO DJANGO:",
              weddingPayload
            );

            // Save wedding to backend
            const weddingResponse =
              await axios.post(
                "https://wedding-book.onrender.com/api/weddings/",
                weddingPayload,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

            console.log(
              "WEDDING SAVED SUCCESS:",
              weddingResponse.data
            );

            alert("Payment Successful!");
            navigate("/payment-success");

          } catch (error) {
            console.log(
              "BACKEND ERROR DATA:",
              error.response?.data
            );

            console.log(
              "BACKEND ERROR STATUS:",
              error.response?.status
            );

            console.error(
              "FULL ERROR:",
              error
            );

            alert(
              "Wedding save failed. Check console."
            );
          }
        },

        theme: {
          color: "#111827",
        },
      };

      const razorpay =
        new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error(
        "PAYMENT ERROR:",
        error
      );

      alert(
        "Failed to initiate payment"
      );
    }
  };

  if (!booking) {
    return <h2>No Booking Found</h2>;
  }

  return (
    <div className="payment-container">
      <div className="payment-card">

        <div className="payment-header">
          <h2>Payment Summary</h2>
          <p>
            Review your wedding booking details
          </p>
        </div>

        <div className="detail-row">
          <span>Venue Name</span>
          <strong>
            {booking.venueName ||
              "Not Selected"}
          </strong>
        </div>

        <div className="detail-row">
          <span>Wedding Date</span>
          <strong>
            {booking.weddingDate}
          </strong>
        </div>

        <div className="detail-row">
          <span>Wedding Time</span>
          <strong>
            {booking.weddingTime}
          </strong>
        </div>

        <div className="detail-row">
          <span>Food Type</span>
          <strong>
            {booking.foodType}
          </strong>
        </div>

        <div className="detail-row">
          <span>Language</span>
          <strong>
            {booking.language}
          </strong>
        </div>

        <div className="detail-row">
          <span>Dress Code</span>
          <strong>
            {booking.dressCode}
          </strong>
        </div>

        <div className="amount-box">
          <span>Total Amount</span>
          <h3>
            ₹ {booking.venuePrice || 0}
          </h3>
        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
        >
          Proceed to Pay
        </button>

        <p className="secure-text">
          🔒 Secure Payment Powered by Razorpay
        </p>

      </div>
    </div>
  );
};

export default Payment;