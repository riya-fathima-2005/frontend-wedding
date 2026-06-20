import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/Style/Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("weddingDetails");
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

            // Step 1 data from sessionStorage
            const latestWedding = JSON.parse(
              sessionStorage.getItem("hostStep1")
            );

            console.log("Step1 Data:", latestWedding);

            const token =
              localStorage.getItem("token");

            // Save wedding to backend
            const weddingResponse = await axios.post(
              "https://wedding-book.onrender.com/api/weddings/",
              {
                // Step 1 data
                role: latestWedding.role,
                firstname: latestWedding.firstname,
                lastname: latestWedding.lastname,
                partner_firstname:
                  latestWedding.partnerFirstname,
                partner_lastname:
                  latestWedding.partnerLastname,
                email: latestWedding.email,
                phone: latestWedding.phonenumber,

                // Step 2 data
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

                latitude: booking.latitude,
                longitude: booking.longitude,

                payment_status: "Success",
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            console.log(
              "Wedding Saved:",
              weddingResponse.data
            );

            alert("Payment Successful!");
            navigate("/payment-success");
          } catch (error) {
            console.log(
              "BACKEND ERROR:",
              error.response?.data
            );
            console.error(error);
            alert("Wedding save failed");
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
      console.error("Payment Error:", error);
      alert("Failed to initiate payment");
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
          <p>Review your wedding booking details</p>
        </div>

        <div className="detail-row">
          <span>Venue Name</span>
          <strong>
            {booking.venueName || "Not Selected"}
          </strong>
        </div>

        <div className="detail-row">
          <span>Wedding Date</span>
          <strong>{booking.weddingDate}</strong>
        </div>

        <div className="detail-row">
          <span>Wedding Time</span>
          <strong>{booking.weddingTime}</strong>
        </div>

        <div className="detail-row">
          <span>Food Type</span>
          <strong>{booking.foodType}</strong>
        </div>

        <div className="detail-row">
          <span>Language</span>
          <strong>{booking.language}</strong>
        </div>

        <div className="detail-row">
          <span>Dress Code</span>
          <strong>{booking.dressCode}</strong>
        </div>

        <div className="amount-box">
          <span>Total Amount</span>
          <h3>₹ {booking.venuePrice || 0}</h3>
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